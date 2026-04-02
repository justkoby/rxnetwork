import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page animate-blur-fade">
      <div className="container">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="effective-date">Effective date: March 20, 2026</p>
        </header>
        
        <article className="privacy-content">
          <p className="intro-text">
            RxNetwork (“we”, “us”, “our”) operates rxnetwork.net and related services. This Privacy Policy explains what information we collect, how we use it, how we share it, and the choices and rights available to you. RxNetwork is focused exclusively on healthcare and medical advertising and works with medical publishers and HCP-focused advertisers. Over 40 years combined experience in medical media, healthcare advertising and ad operations.
          </p>

          <section>
            <h2>1. Scope and acceptance</h2>
            <p>This policy applies to information collected through our websites, publisher integrations, ad operations, email communications, and other services we provide to publishers, advertisers, and site visitors. By using our services or interacting with our sites, you accept the practices described here.</p>
          </section>

          <section>
            <h2>2. Information we collect</h2>
            <ul>
              <li><strong>Information you provide directly</strong> — Contact details (name, email, phone), billing and invoicing information, and any content you submit when contacting us or signing agreements.</li>
              <li><strong>Publisher and advertiser data</strong> — Contractual and operational data needed to manage publisher relationships and campaigns (campaign specs, invoices, reporting).</li>
              <li><strong>HCP identifiers and targeting data</strong> — When required for campaign delivery we process deterministic identifiers used for physician targeting (NPI, ME, DGID/IQVIA, hashed emails, physician lists) and physician-level reporting required by U.S. pharma clients.</li>
              <li><strong>Technical and usage data</strong> — IP addresses, device and browser information, cookies and similar technologies, page views, referrers, and interaction data collected for analytics and ad delivery.</li>
              <li><strong>Third-party data</strong> — Data received from partners, DSPs, SSPs, and data providers (for example, AIM dataset integrations and DGID/IQVIA identifiers) used to enable deterministic targeting and reporting.</li>
            </ul>
          </section>

          <section>
            <h2>3. How we use information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Deliver, measure, and optimize HCP-targeted advertising campaigns.</li>
              <li>Integrate and manage datasets (for example, AIM physician dataset with Prebid and GAM) and generate physician-level data (PLD) reporting required by clients.</li>
              <li>Provide publisher partner management, billing, invoicing, and campaign reporting.</li>
              <li>Improve our services, detect fraud and abuse, and comply with legal obligations.</li>
              <li>Communicate with you about your account, campaigns, or service updates.</li>
            </ul>
          </section>

          <section>
            <h2>4. Cookies and tracking technologies</h2>
            <p>We and our partners use cookies, web beacons, SDKs, and similar technologies to:</p>
            <ul>
              <li>Enable ad delivery and deterministic matching (when permitted), measure campaign performance, and support header bidding and Prebid integrations.</li>
              <li>Provide analytics and site functionality.</li>
            </ul>
            <p>You can manage cookie preferences through your browser or via any cookie controls presented on our sites. Disabling certain cookies may affect ad personalization and measurement.</p>
          </section>

          <section>
            <h2>5. Advertising, targeting, and data sharing</h2>
            <ul>
              <li><strong>Ad partners and platforms:</strong> We share data with DSPs, SSPs, ad exchanges, and other ad tech partners to enable real-time bidding, deterministic physician targeting, and campaign delivery.</li>
              <li><strong>Publisher and advertiser reporting:</strong> We provide campaign performance and PLD reporting to advertisers and publishers as required by contract and regulatory obligations.</li>
              <li><strong>No sale of HCP identifiers:</strong> We do not sell personally identifiable HCP identifiers for consumer marketing outside the scope of contracted healthcare advertising and campaign delivery.</li>
            </ul>
          </section>

          <section>
            <h2>6. Legal bases and compliance</h2>
            <p>For personal data subject to privacy laws (e.g., GDPR, CCPA), we rely on appropriate legal bases such as contractual necessity, legitimate interests (ad delivery, fraud prevention, platform operations), and consent where required. We comply with applicable data protection laws and respond to valid data subject requests in accordance with those laws.</p>
          </section>

          <section>
            <h2>7. Data retention and security</h2>
            <p><strong>Retention:</strong> We retain data as long as necessary to provide services, fulfill contractual obligations, comply with legal requirements, and for legitimate business purposes.</p>
            <p><strong>Security:</strong> We implement administrative, technical, and physical safeguards designed to protect data. Access to sensitive data is limited to authorized personnel and partners who require it to perform services (ad ops, reporting, billing). Despite safeguards, no system is completely secure; we will notify affected parties and authorities as required by law in the event of a breach.</p>
          </section>

          <section>
            <h2>8. Third-party sites and services</h2>
            <p>Our sites may contain links or integrations with third-party sites (publishers, data providers, ad platforms). This Privacy Policy does not apply to those third parties. We encourage you to review their privacy policies before providing information.</p>
          </section>

          <section>
            <h2>9. Children’s privacy</h2>
            <p>Our services are not directed to children under 16. We do not knowingly collect personal information from children. If we learn we have collected such information, we will take steps to delete it.</p>
          </section>

          <section>
            <h2>10. International transfers</h2>
            <p>Data we collect may be processed in the United States and other countries where our service providers operate. When transferring personal data across borders, we use appropriate safeguards required by law.</p>
          </section>

          <section>
            <h2>11. Your rights and choices</h2>
            <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data, and to object to certain processing. To exercise rights or update preferences (including cookie choices), contact us at the address below. We will verify requests as required by law.</p>
          </section>

          <section>
            <h2>12. Changes to this policy</h2>
            <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will post the updated policy with a new effective date on our site.</p>
          </section>

          <section>
            <h2>13. Contact</h2>
            <p>For questions, data requests, or privacy concerns, contact:</p>
            <p><strong>Email:</strong> <a href="mailto:acastro@rxnetwork.net">acastro@rxnetwork.net</a></p>
          </section>

          <div className="privacy-footer-note">
            <p>RxNetwork is dedicated to secure, compliant, and clinically relevant advertising for healthcare publishers and advertisers. RxNetwork fully manages and maintains HCP-only campaign demand and integrates physician datasets and reporting to meet client requirements.</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
