import React from "react";
import Link from "next/link";

// Variants extracted from the button class strings that already existed in
// this repo (see MemeEditor's "Save" button and the memegenerator page's
// "Website" button) - no new visual variant is introduced here.
export type ButtonVariant = "cta" | "bare";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  cta: "min-w-40 rounded-lg bg-red-600 p-2 hover:opacity-60",
  bare: "",
};

const cx = (...parts: Array<string | undefined | false>) =>
  parts.filter(Boolean).join(" ");

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonAsLink = CommonProps &
  React.ComponentProps<typeof Link> & {
    as: "link";
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

// One shared button/link-button component so every call site (Save, the
// mobile menu toggle, the meme-generator "Website" link, modal close
// buttons, ...) renders from the same place. It forwards refs and all
// native props, keeps the exact same tag and final class list each call
// site already used, and defaults real <button>s to type="button".
export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button({ as = "button", variant = "bare", className, ...rest }, ref) {
  const classes = cx(VARIANT_CLASSES[variant], className) || undefined;

  if (as === "a") {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...anchorProps}
      />
    );
  }

  if (as === "link") {
    const linkProps = rest as React.ComponentProps<typeof Link>;
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...linkProps}
      />
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={buttonProps.type ?? "button"}
      className={classes}
      {...buttonProps}
    />
  );
});
