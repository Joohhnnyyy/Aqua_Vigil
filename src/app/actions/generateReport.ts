"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateReport(
  weatherData: any,
  metrics: any,
  alerts: any
) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key is missing");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Attempting to use gemini-2.5-flash as requested
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Generate a detailed river health and flood risk report based on the following data:
      
      Location: Ganga Basin (Varanasi/Kolkata region)
      
      Current Weather Conditions (OpenWeather API):
      ${JSON.stringify(weatherData, null, 2)}
      
      River Metrics (Model Output/Sensors):
      ${JSON.stringify(metrics, null, 2)}
      
      Active Alerts:
      ${JSON.stringify(alerts, null, 2)}
      
      Please provide a comprehensive analysis including:
      1. Executive Summary
      2. Current Weather Impact on River Levels
      3. Water Quality Assessment (Turbidity, Flow, etc.)
      4. Flood Risk Analysis
      5. Recommended Actions for Local Authorities
      
      Format the output in clean Markdown.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return { success: true, report: text };
  } catch (error: any) {
    console.error("Error generating report with gemini-2.5-flash:", error);
    
    // Fallback to gemini-pro if 2.5 fails
    try {
        if (error.message?.includes("404") || error.message?.includes("not found")) {
            console.log("Falling back to gemini-pro...");
            const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            
            const prompt = `
              Generate a detailed river health and flood risk report based on the following data:
              
              Location: Ganga Basin (Varanasi/Kolkata region)
              
              Current Weather Conditions (OpenWeather API):
              ${JSON.stringify(weatherData, null, 2)}
              
              River Metrics (Model Output/Sensors):
              ${JSON.stringify(metrics, null, 2)}
              
              Active Alerts:
              ${JSON.stringify(alerts, null, 2)}
              
              Please provide a comprehensive analysis including:
              1. Executive Summary
              2. Current Weather Impact on River Levels
              3. Water Quality Assessment (Turbidity, Flow, etc.)
              4. Flood Risk Analysis
              5. Recommended Actions for Local Authorities
              
              Format the output in clean Markdown.
            `;
            const result = await model.generateContent(prompt);
            return { success: true, report: result.response.text() };
        }
    } catch (fallbackError) {
        console.error("Fallback error:", fallbackError);
    }
    
    return { success: false, error: error.message || "Failed to generate report" };
  }
}
