import { Metadata } from "next";
import WebhookTestForm from "./webhook-test-form";

export const metadata: Metadata = {
  title: "Webhook Test (Removed) - StayCool Airco",
  description: "GoHighLevel webhook test has been removed",
  robots: "noindex, nofollow",
};

export default function WebhookTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Webhook Test (Removed)</h1>
          <p className="text-gray-600 mb-8">
            The GoHighLevel webhook integration has been removed.
            Contact forms now use EmailJS + LeadFlow CRM.
          </p>

          <WebhookTestForm />
        </div>
      </div>
    </div>
  );
}
