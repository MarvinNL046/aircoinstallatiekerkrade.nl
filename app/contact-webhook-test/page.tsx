import { Metadata } from "next";
import WebhookTestForm from "./webhook-test-form";

export const metadata: Metadata = {
  title: "Webhook Test - StayCool Airco",
  description: "Test page for webhook integration",
  robots: "noindex, nofollow",
};

export default function WebhookTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Webhook Test Page</h1>
          <p className="text-gray-600 mb-8">
            This page is for testing the GoHighLevel webhook integration. 
            It only sends to the webhook, not to EmailJS.
          </p>
          
          <WebhookTestForm />
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="font-semibold text-blue-900 mb-2">Webhook Details:</h2>
            <p className="text-sm text-blue-800 break-all">
              https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}