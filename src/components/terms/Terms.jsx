import style from "./Terms.module.css"

const Terms = () => {
  return (
    <section className={style.termsSection}>
        <h1 className={style.termsSectionHeading}>Terms of Service Agreement for Smile Supply</h1>
        <span className={style.termsSectionUpdate}>Last Updated: 10/12/2023</span>
        <div className={style.termsSectiontextContainer}>
            <span className={style.termsSectiontextSpan}>1. Acceptance of Terms</span>
            <p>By accessing or using the Smile Supply website and services (the "Service"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.</p>
            <span className={style.termsSectiontextSpan}>2. Description of Service</span>
            <p>Smile Supply provides dental professionals with an inventory tracking platform to manage their dental supplies efficiently.</p>
            <span className={style.termsSectiontextSpan}>3. User Accounts</span>
            <p>3.1. You must create an account to use the Service. You agree to provide accurate and complete information during the registration process and to keep your account information up-to-date.</p>
            <p>3.2. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>
            <span className={style.termsSectiontextSpan}>4. Use of the Service</span>
            <p>4.1. You agree to use the Service in accordance with all applicable laws and regulations.</p>
            <p>4.2. You are responsible for all content and data that you upload, store, or transmit through the Service. You grant Smile Supply a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content for the purpose of providing the Service.</p>
            <p>Use the Service for any illegal or unauthorized purpose.
            Post or transmit any content that is unlawful, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable.
            Use the Service to engage in any form of harassment, spamming, or other unethical behavior.
            Attempt to gain unauthorized access to the Service or its related systems or networks.</p>
            <span className={style.termsSectiontextSpan}>5. Privacy</span>
            <p>Your use of the Service is governed by our Privacy Policy, which can be found at [link to Privacy Policy]. By using the Service, you consent to the collection and use of your personal information as described in the Privacy Policy.</p>
            <span className={style.termsSectiontextSpan}>6. Termination</span>
            <p>6.1. Smile Supply may terminate your access to the Service at any time, with or without cause, and without notice.</p>
            <p>6.2. You may terminate your account by discontinuing use of the Service.</p>
            <span className={style.termsSectiontextSpan}>7. Changes to Terms</span>
            <p>Smile Supply may modify these Terms at any time. Any changes will be effective immediately upon posting on the Service. You are responsible for regularly reviewing these Terms.</p>
            <span className={style.termsSectiontextSpan}>8. Disclaimer of Warranties</span>
            <p>The Service is provided "as is" and "as available," without warranties of any kind, either express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
            <span className={style.termsSectiontextSpan}>9. Limitation of Liability</span>
            <p>Smile Supply shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
            <p>Your use or inability to use the Service.</p>
            <p>Any unauthorized access to or use of our servers and/or any personal information stored therein.</p>
            <p>Any interruption or cessation of the Service.</p>
            <span className={style.termsSectiontextSpan}>10. Governing Law</span>
            <p>These Terms are governed by and construed in accordance with the laws of California, without regard to its conflict of law principles.</p>
            <span className={style.termsSectiontextSpan}>11. Contact Information</span>
            <p>If you have any questions or concerns about these Terms, please contact us at svizzusi13@gmail.com.</p>
        </div>
    </section>
  )
};

export default Terms;
