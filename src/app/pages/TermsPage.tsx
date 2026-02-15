import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms and Conditions | Ranchi Cab Service"
        description="Terms and Conditions for using Ranchi Cab Service. Please read these terms carefully before booking."
        keywords="ranchi cab service terms, taxi service terms and conditions, booking terms ranchi cab"
        robots="noindex, nofollow"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 17, 2026</p>

          <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By booking or using our cab services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Booking and Cancellation</h2>
              <p className="text-gray-700 mb-4">
                <strong>Booking:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>All bookings are subject to vehicle availability</li>
                <li>Booking confirmation will be sent via phone/WhatsApp</li>
                <li>Advance booking is recommended, especially during peak seasons</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Cancellation:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Cancellation must be made at least 2 hours before pickup time</li>
                <li>No cancellation charges for cancellations made 6+ hours in advance</li>
                <li>50% charge for cancellations made 2-6 hours before pickup</li>
                <li>No refund for cancellations made less than 2 hours before pickup</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Payment can be made in cash, UPI, or online transfer</li>
                <li>For outstation trips, advance payment may be required</li>
                <li>All prices are inclusive of driver charges</li>
                <li>Toll charges, parking fees, and state taxes are extra</li>
                <li>Night charges (10 PM - 6 AM) may apply for certain services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Service Rules</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Smoking, drinking, and use of illegal substances are strictly prohibited in our vehicles</li>
                <li>Passengers must treat drivers with respect and courtesy</li>
                <li>Any damage to the vehicle caused by passengers will be charged</li>
                <li>Maximum luggage capacity must not be exceeded</li>
                <li>Driver has the right to refuse service to intoxicated or abusive passengers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Outstation Travel</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Minimum billing of 250 km per day for outstation trips</li>
                <li>Driver allowance is included in the package</li>
                <li>Customer is responsible for driver's accommodation for overnight stays</li>
                <li>Return journey will be charged even for one-way trips if applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Liability</h2>
              <p className="text-gray-700 mb-4">
                While we strive to provide safe and reliable service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Ranchi Cab Service is not liable for any loss, damage, or theft of personal belongings</li>
                <li>We are not responsible for delays caused by traffic, weather, or road conditions</li>
                <li>All vehicles are insured, but passengers are advised to have their own travel insurance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Dispute Resolution</h2>
              <p className="text-gray-700">
                Any disputes arising from the use of our services will be resolved through mutual discussion. If unresolved, the matter will be subject to the jurisdiction of courts in Ranchi, Jharkhand.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Modifications</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For any questions or concerns regarding these Terms and Conditions:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Phone:</strong> <a href="tel:+917903629240" className="text-blue-600 hover:underline">+91 7903629240</a></li>
                <li><strong>Email:</strong> <a href="mailto:ranchicabservice2@gmail.com" className="text-blue-600 hover:underline">ranchicabservice2@gmail.com</a></li>
              </ul>
              <p className="text-gray-700 mt-6">
                Ready to book a cab? Explore our <Link to="/services" className="text-blue-600 hover:underline font-semibold">taxi services</Link> including <Link to="/local-taxi" className="text-blue-600 hover:underline">local taxi</Link>, <Link to="/outstation-taxi" className="text-blue-600 hover:underline">outstation cabs</Link>, <Link to="/airport-taxi" className="text-blue-600 hover:underline">airport transfers</Link>, and <Link to="/corporate-taxi" className="text-blue-600 hover:underline">corporate taxi</Link>. Check our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> to learn how we protect your data.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
