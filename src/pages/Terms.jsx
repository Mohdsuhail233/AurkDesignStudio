import React, { useEffect } from 'react';
import './Terms.css';

export default function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <header className="terms-header">
                <h1>Terms & Condition</h1>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
            </header>

            <div className="terms-content">
                <section>
                    <h2>1. Introduction</h2>
                    <p>Welcome to AURK DESIGN STUDIO. By accessing or using our website, you agree to abide by these terms. If you do not agree, please refrain from using our services.</p>
                </section>

                <section>
                    <h2>2. Intellectual Property</h2>
                    <p>All content, including designs, images, and text, is the property ofAURK DESIGN STUDIO and may not be copied, modified, or distributed without permission.</p>
                </section>

                <section>
                    <h2>3. Use of Services</h2>
                    <p>You agree to use this website lawfully and not engage in any activities that may harm the website or other users.</p>
                </section>

                <section>
                    <h2>4. Limitation of Liability</h2>
                    <p>AURK DESIGN STUDIO is not responsible for any direct, indirect, or incidental damages arising from your use of the website or reliance on its content.</p>
                </section>

                <section>
                    <h2>5. External Links</h2>
                    <p>Our website may contain links to third-party websites. We do not endorse or take responsibility for their content or policies.</p>
                </section>

                <section>
                    <h2>6. Changes to Terms</h2>
                    <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
                </section>

                <section>
                    <h2>7. Contact Us</h2>
                    <p>For any questions regarding these terms, please contact us at <a href="mailto:AurkDesignStudio@gmail.com">AurkDesignStudio@gmail.com</a></p>
                </section>
            </div>
            
        </div>
    );
}
