import style from "./Privacy.module.css"

const Privacy = () => {
  return (
    <section className={style.privacySection}>
        <h1 className={style.privacySectionHeading}>Privacy Policy for Smile Supply</h1>
            <span className={style.privacySectionUpdate}>Last Updated: 10/12/2023</span>
            <span className={style.privacySectionUpdate}>At Smile Supply ("we," "us," or "our"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our website and services (the "Service"). By using the Service, you consent to the practices described in this Privacy Policy.</span>
        <div className={style.privacySectiontextContainer}>
          <span className={style.privacySectiontextSpan}>1. Information We Collect</span>
          <p>1.1. Information You Provide: When you create an account, use the Service, or communicate with us, we may collect information you provide, including your name, email address, contact information, and any other information you choose to provide.</p>
          <p>1.2. Usage Information: We collect information about your use of the Service, including your interactions with our website, the features you use, and the content you access.</p>
          <p>1.3. Device Information: We may collect information about the device you use to access the Service, including the device type, operating system, and browser type.</p>
          <p>1.4. Log Data: When you use the Service, our servers may automatically record information, including your IP address, access times, and pages visited.</p>
          <p>1.5. Cookies and Similar Technologies: We may use cookies and similar tracking technologies to collect information about your use of the Service. You can set your browser to refuse all or some browser cookies, but this may affect the functionality of the Service.</p>
          <span className={style.privacySectiontextSpan}>2. How We Use Your Information</span>
          <p>2.1. Provide and Maintain the Service: We use your information to provide, maintain, and improve the Service, including troubleshooting, data analysis, and research.</p>
          <p>2.2. Communicate with You: We may use your contact information to send you important information about the Service, such as updates, changes to our terms, and security alerts.</p>
          <p>2.3. Marketing and Promotions: With your consent, we may use your information to send you promotional materials, newsletters, or other marketing communications.</p>
          <span className={style.privacySectiontextSpan}>3. Disclosure of Your Information</span>
          <p>3.1. Service Providers: We may share your information with third-party service providers who help us operate and improve the Service. These service providers are obligated to keep your information confidential and secure.</p>
          <p>3.2. Legal Requirements: We may disclose your information when required by law, such as in response to a court order or other legal process, or to protect our rights, privacy, safety, or property.</p>
          <span className={style.privacySectiontextSpan}>4. Your Choices</span>
          <p>4.1. Account Information: You can review and update your account information by logging into your account settings.</p>
          <p>4.2. Marketing Communications: You can opt out of receiving marketing communications from us by following the instructions in the communication or by contacting us at svizzus13@gmail.com</p>
          <span className={style.privacySectiontextSpan}>5. Security</span>
          <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no data transmission over the internet is completely secure, and we cannot guarantee the security of your information.</p>
          <span className={style.privacySectiontextSpan}>6. Changes to this Privacy Policy</span>
          <p>We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. Any changes will be effective immediately upon posting on the Service.</p>
          <span className={style.privacySectiontextSpan}>7. Contact Information</span>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at svizzus13@gmail.com</p>
        </div>
    </section>
  )
};

export default Privacy;
