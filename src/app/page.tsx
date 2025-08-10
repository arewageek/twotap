import { ComponentWizard } from "@/components/component-wizard";
import { FloatingSocialButton } from "@/components/floating-chat-button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="relative">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <ComponentWizard />

      {/* <FloatingSocialButton /> */}
    </div>
  );
}
