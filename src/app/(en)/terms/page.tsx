import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import "../legal.css";

const TITLE = "Terms of Service";
const DESCRIPTION =
  "The AIOS is free, open-source software licensed under GPL-2.0, running on your own machine. These terms cover what that means and what it does not promise.";

export const metadata: Metadata = {
  title: `${TITLE} — The AIOS`,
  description: DESCRIPTION,
  alternates: { canonical: "https://the-aios.com/terms" },
  openGraph: { title: `${TITLE} — The AIOS`, description: DESCRIPTION, url: "https://the-aios.com/terms" },
};

export default function Terms() {
  return (
    <LegalPage
      title={TITLE}
      standfirst="The AIOS is free software you run yourself. These terms are short because there is not much of a service to have terms about."
      updated="30 August 2026"
    >
      <div className="callout">
        <p>
          <strong>The short version.</strong> The AIOS is open-source software under GPL-2.0. You download it,
          it runs on your computer, and you own everything it produces. We do not host it, we cannot see your
          data, and we make no promise that it will work — it is offered as-is, like all free software.
        </p>
      </div>

      <h2>1. What you are agreeing to</h2>

      <p>
        These terms cover this website and the OAuth client we publish for connecting Google Workspace. The
        software itself is governed by its licence — <strong>GNU General Public License, version 2</strong> —
        and where these terms and that licence disagree about the software, <strong>the licence wins</strong>.
      </p>

      <h2>2. It runs on your machine, and that has consequences</h2>

      <p>
        The AIOS is not a hosted product. There is no account to create, no server of ours it talks to, and no
        session for us to terminate. Practically:
      </p>

      <ul>
        <li>
          <strong>Your data stays yours</strong> and stays with you — your vault, your notes, your Google
          content. See the <a href="/privacy">Privacy Policy</a> for why that is architectural rather than a
          promise.
        </li>
        <li>
          <strong>You are responsible for what it does.</strong> The AIOS acts through Claude Code with the
          permissions you grant it — it can write files, run commands, and reach services you connect. Grant
          accordingly, and read what it proposes.
        </li>
        <li>
          <strong>Backups are yours.</strong> We hold no copy of your vault and cannot restore one.
        </li>
      </ul>

      <h2>3. The shared Google OAuth client</h2>

      <p>
        To spare you an hour in the Google Cloud Console, we may publish an OAuth client so the Google
        connector works without you creating your own project. Using it is a convenience, and it comes with
        conditions:
      </p>

      <ul>
        <li>
          <strong>It is offered, not guaranteed.</strong> We may rotate, restrict or withdraw it — for example
          if it is abused, or if Google requires it. The connector will always support your own OAuth client,
          and switching to one is documented.
        </li>
        <li>
          <strong>Do not use it for anything other than running the AIOS.</strong> Specifically: no
          impersonating this application, no reselling access, no automated bulk access, no using its identity
          on a consent screen for software that is not this software. That identity is shared by everyone who
          uses the AIOS, and abuse of it takes the connector away from all of them.
        </li>
        <li>
          <strong>Your relationship with Google is your own.</strong> Your use of Google APIs is governed by
          Google&rsquo;s terms and your agreement with them. We are not a party to it and cannot act on your
          behalf.
        </li>
      </ul>

      <h2>4. No warranty</h2>

      <p>
        The AIOS is provided <strong>&ldquo;as is&rdquo;, without warranty of any kind</strong>, express or
        implied — including merchantability, fitness for a particular purpose, and non-infringement. This is
        the standard position for free software and it is stated plainly in the GPL.
      </p>

      <p>
        Said less formally: it is a tool that instructs a language model to act on your files and accounts. It
        will sometimes be wrong. Keep backups, use version control, and read what it proposes before you accept
        it — the framework is built to make that easy, and it assumes you will.
      </p>

      <h2>5. Limitation of liability</h2>

      <p>
        To the maximum extent permitted by law, we are not liable for any indirect, incidental, special or
        consequential damages, or for lost data, lost profits or business interruption, arising from your use
        of the AIOS — even if we were told such damage was possible.
      </p>

      <p>
        You paid nothing for this software. Our total liability to you is limited accordingly, and in any case
        will not exceed what you paid us, which is zero.
      </p>

      <h2>6. Contributions</h2>

      <p>
        Contributions are welcome and are accepted under GPL-2.0, the same licence as the project. By opening a
        pull request you confirm you have the right to contribute the code and are licensing it that way. See{" "}
        <a href="https://github.com/The-AIOS/aios/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a>.
      </p>

      <h2>7. Trademarks</h2>

      <p>
        The GPL covers the code, not the name. &ldquo;The AIOS&rdquo; and its logo identify this project —
        please do not use them in a way that suggests a modified version is the official one. Forking is
        encouraged; forking under our name and consent screen is not.
      </p>

      <h2>8. Changes</h2>

      <p>
        If these terms change, the date at the top changes with them, and the change is visible in this
        website&rsquo;s public git history. Continuing to use the AIOS after a change means you accept it; if
        you do not, stop using it — there is nothing to cancel.
      </p>

      <h2>9. Governing law</h2>

      <p>
        These terms are governed by the laws of Mexico, without regard to conflict-of-law rules. Nothing here
        removes a consumer protection you have where you live that cannot be waived by agreement.
      </p>

      <h2>Contact</h2>

      <p>
        <a href="mailto:hello@the-aios.com">hello@the-aios.com</a>, or{" "}
        <a href="https://github.com/The-AIOS/aios">github.com/The-AIOS/aios</a>.
      </p>
    </LegalPage>
  );
}
