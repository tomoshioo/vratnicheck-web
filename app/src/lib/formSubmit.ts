/**
 * Odeslání dat formuláře na e-mail přes Formspree (https://formspree.io).
 * Nastavte VITE_FORMSPREE_FORM_ID v .env (viz .env.example).
 */

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

export type SubmitResult = { ok: true } | { ok: false; error: string };

/**
 * Odešle payload na Formspree. E-mail přijde na adresu ověřenou u daného formuláře.
 * @param payload - objekt s poli formuláře (name, email, message, ...). Pole _replyto nastaví "Reply-To" na e-mail návštěvníka.
 * @param formId - volitelně jiné Formspree form ID (default z env)
 */
export async function submitToFormspree(
  payload: Record<string, string>,
  formId?: string
): Promise<SubmitResult> {
  const id = formId ?? FORMSPREE_FORM_ID;
  if (!id) {
    return {
      ok: false,
      error: 'Formulář není nakonfigurován. Nastavte VITE_FORMSPREE_FORM_ID v .env',
    };
  }

  const body: Record<string, string> = { ...payload };
  if (payload.email && !body._replyto) {
    body._replyto = payload.email;
  }

  try {
    const res = await fetch(`https://formspree.io/f/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return {
        ok: false,
        error: (data as { error?: string })?.error ?? `Chyba ${res.status}. Zkuste to později.`,
      };
    }
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : 'Odeslání se nezdařilo. Zkontrolujte připojení.',
    };
  }
}

export function isFormspreeConfigured(): boolean {
  return Boolean(FORMSPREE_FORM_ID);
}
