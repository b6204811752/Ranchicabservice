import { Helmet } from 'react-helmet-async';

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ranchi Cab Service</title>
        <meta name="description" content="Privacy Policy for Ranchi Cab Service. Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 17, 2026</p>

          <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us when you book our cab services, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Name and contact information (phone number, email address)</li>
                <li>Pickup and drop locations</li>
                <li>Travel dates and times</li>
                <li>Payment information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide and maintain our taxi services</li>
                <li>Process your bookings and payments</li>
                <li>Communicate with you about your bookings</li>
                <li>Improve our services and customer experience</li>
                <li>Send you promotional offers (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-gray-700">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with our drivers solely for the purpose of providing the requested service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of promotional communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-gray-700">
                We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Phone:</strong> <a href="tel:+917903629240" className="text-blue-600 hover:underline">+91 7903629240</a></li>
                <li><strong>Email:</strong> <a href="mailto:rohittravels10@gmail.com" className="text-blue-600 hover:underline">rohittravels10@gmail.com</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
