import PageWrapper from '@/components/PageWrapper'
import { CONTACTS } from '@/data/contacts'
import { ROUTES } from '@/routes/routes'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('LEGAL')

export default function PageLegal() {
  return (
    <PageWrapper>
      <section>
        <article>
          <h1>{ROUTES.LEGAL.title}</h1>

          <p>
            {ROUTES.HOME.title} is committed to protecting your privacy and
            personal data. This policy applies to projects published under
            lucasmaues.com and, based in the Federative Republic of Brazil.
          </p>

          <h2>1. Applicable Legislation</h2>

          <p>
            This {ROUTES.LEGAL.title} is primarily governed by Brazilian law.
            Depending on your location and the service used, this policy also
            observes compatible principles from the United States and the
            European Union. By accessing https://lucasmaues.com and related
            projects on this domain (collectively, "projects"), you acknowledge
            this policy and applicable legal frameworks.
          </p>

          <p>Applicable and adherent with:</p>

          <p>
            <strong>Brazil:</strong>
          </p>

          <ul>
            <li>
              Constitution of the Federative Republic of Brazil (1988)
              principles of privacy, dignity, and informational
              self-determination.
            </li>
            <li>Civil Code (Lei nº 10.406/2002)</li>
            <li>CDC - Consumer Protection Code (Lei nº 8.078/1990)</li>
            <li>
              Civil Rights Framework for the Internet (Lei nº 12.965/2014)
            </li>
            <li>LGPD - General Data Protection Law (Lei nº 13.709/2018)</li>
            <li>
              ECA Digital - Digital Statute for Children and Adolescents (Lei nº
              15.211/2025)
            </li>
          </ul>

          <p>
            <strong>European Union:</strong>
          </p>

          <ul>
            <li>
              GDPR - General Data Protection Regulation (Regulation EU 2016/679)
              principles, when applicable.
            </li>
          </ul>

          <p>
            <strong>United States:</strong>
          </p>

          <ul>
            <li>
              CCPA/CPRA - California Consumer Privacy Act and California Privacy
              Rights Act for California residents, when applicable.
            </li>
            <li>
              FTC Act (15 U.S.C. §§ 41-58) for consumer protection and unfair or
              deceptive practices.
            </li>
            <li>
              CFAA - Computer Fraud and Abuse Act (18 U.S.C. §§ 1030) for
              cybersecurity and unauthorized access issues.
            </li>
            <li>
              DMCA - Digital Millennium Copyright Act (17 U.S.C. §§ 512) for
              copyright infringement claims and takedown procedures.
            </li>
            <li>
              COPPA - Children's Online Privacy Protection Act (15 U.S.C. §§
              6501–6506), cited as a reference standard for exclusion — the
              projects do not knowingly collect personal data from children
              under 13.
            </li>
          </ul>

          <h2>2. Data Controller and Scope</h2>
          <p>
            LUCASM.DEV LTDA acts as the data controller for the personal data
            processed through these projects, except where a third-party service
            acts independently as its own controller.
          </p>

          <h2>3. Automatically Collected Information</h2>

          <p>
            The projects may automatically collect public data and non-personal
            information (that does not directly identify you), such as usage
            statistics, pages visited, approximate geolocation, operating
            system, browser, internet service provider, IP address, referral
            URL, exit pages, timestamp, heatmap, and similar interaction data.
          </p>

          <h2>4. Information That You Provide</h2>
          <p>
            The projects may also receive and store personal information that
            identifies you when you submit contact forms or provide information
            directly, including but not limited to your name, email address, and
            phone number.
          </p>

          <h2>5. Legal Bases for Processing</h2>
          <p>
            Depending on the purpose and jurisdiction, personal data may be
            processed based on: consent, legitimate interest, contract
            performance, legal obligation, and regular exercise of rights,
            always in accordance with applicable law.
          </p>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            The projects and related email communications utilize Cookies and
            similar tracking technologies, such as pixel, cache and local web
            browser storage, to save user preferences, execute offline
            experiences and recognize when you view or return to a page.
          </p>
          <p>
            When you first visit a project, a consent notice will be displayed
            allowing you to accept or refuse non-essential cookies. You may
            change your choice at any time through the cookie settings available
            on the site. Only strictly necessary cookies are loaded prior to
            your consent.
          </p>

          <p>
            The web services{' '}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener">
              Cloudflare
            </a>
            {', '}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener">
              Vercel
            </a>
            {', '}
            <a
              href="https://support.google.com/analytics/answer/6004245"
              target="_blank"
              rel="noopener">
              Google Analytics
            </a>
            {' and '}
            <a
              href="https://privacy.microsoft.com/privacystatement"
              target="_blank"
              rel="noopener">
              Microsoft Clarity
            </a>{' '}
            are used on some projects and may place their own cookies on your
            browser. This policy does not cover third-party cookie practices.
            Please review each service privacy policy linked above.
          </p>

          <h2>7. Information Sharing</h2>
          <p>
            The projects do not sell your personal information. For technical
            and operational reasons, integrated third-party services may process
            limited personal data to perform their functions, in accordance with
            their own privacy policies.
          </p>

          <h2>8. Information Use</h2>
          <p>The projects use your information to:</p>
          <ul>
            <li>
              Communicate with you, respond to inquiries, and provide requested
              content.
            </li>
            <li>
              Analyze usage behavior in aggregate form to improve user
              experience.
            </li>
            <li>
              Detect, prevent, and respond to illegal or harmful activities,
              such as cybersecurity incidents, copyright violations, and abuse.
            </li>
          </ul>

          <p>
            To understand how third-party services process your data, please
            review their privacy policies.
          </p>

          <h2>9. Your Privacy Rights</h2>

          <p>
            Subject to applicable law (including LGPD Art. 18), you may request:
          </p>
          <ul>
            <li>Confirmation of and access to your personal data.</li>
            <li>Correction of incomplete, inaccurate, or outdated data.</li>
            <li>
              Anonymization, blocking, or deletion of unnecessary or excessive
              data.
            </li>
            <li>
              Portability of your data to another service or product provider.
            </li>
            <li>
              Information about third parties with whom data has been shared.
            </li>
            <li>Objection to processing carried out without your consent.</li>
            <li>Revocation of consent at any time.</li>
            <li>
              Review of decisions made solely by automated processing that
              affect your interests.
            </li>
          </ul>

          <h2>10. Opting Out</h2>

          <p>
            To opt out of third-party services, please review each provider
            policy individually. For infrastructure and backend services,
            complete opt-out may not always be technically possible.
          </p>

          <p>
            For frontend analytics services, blocking may be possible. If you
            use an ad blocker extension, enable{' '}
            <a
              href="https://globalprivacycontrol.org/"
              target="_blank"
              rel="noopener">
              Global Privacy Control (GPC)
            </a>{' '}
            settings, or use privacy-focused browsers, cookies and tracking
            technologies may be partially or fully disabled.
          </p>

          <h2>11. International Data Transfers</h2>

          <p>
            Because third-party providers may operate globally, your data may be
            processed in countries other than your own. When this occurs, data
            transfers rely on one or more of the following mechanisms, as
            applicable: adequacy decisions recognized by the relevant authority
            (ANPD, European Commission, or equivalent); Standard Contractual
            Clauses (SCCs) or equivalent contractual safeguards; or the specific
            consent of the data subject for the intended transfer. The
            third-party services listed in this policy maintain their own
            international transfer frameworks, detailed in their respective
            privacy policies.
          </p>

          <h2>12. Data Retention and Security</h2>

          <p>
            Personal data is retained only for as long as necessary to fulfill
            the purposes described in this policy or to meet legal and
            regulatory obligations. Administrative, technical, and
            organizational measures are used to protect data against
            unauthorized access, loss, misuse, and disclosure.
          </p>

          <h2>13. Children and Teen Privacy</h2>

          <p>
            The projects are not directed to children and do not intentionally
            collect personal data from minors in violation of applicable law. If
            you believe data from a minor was submitted improperly, please
            contact us for prompt review and deletion when required.
          </p>

          <h2>14. External Resources and Third-Party Links</h2>

          <p>
            The projects may contain links to third-party websites and
            applications for convenience. Lucas Maués does not control and is
            not responsible for third-party content, policies, or practices.
          </p>

          <h2>15. Changes to This Policy</h2>

          <p>
            This Privacy Policy may be updated at any time to reflect legal,
            technical, or operational changes. Continued use of the projects
            after updates means you acknowledge the revised version.
          </p>

          <h2>16. Contact and Data Requests</h2>

          <p>
            If you have questions, suggestions, or want to exercise your privacy
            rights, please contact us at {CONTACTS?.emailLegal?.url}.
          </p>

          <p>
            You may request clarification about how your data is processed,
            including lawful basis, retention period, and international data
            transfers. Requests will be responded to within{' '}
            <strong>15 calendar days</strong> as required by LGPD Art. 18, §5,
            or within <strong>30 calendar days</strong> for users under GDPR
            Art. 12, §3, extendable by an additional two months where necessary.
          </p>

          <p>
            For complaints in Brazil, you may contact the National Data
            Protection Authority (ANPD), when applicable.
          </p>

          <p>Last updated: April 8, 2026</p>
        </article>
      </section>
    </PageWrapper>
  )
}
