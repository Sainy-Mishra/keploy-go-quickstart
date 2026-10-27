import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { FlowDiagram } from "@/components/FlowDiagram";
import { Step, Steps } from "@/components/Steps";

// These are available in every .mdx file without importing them.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    Callout,
    Steps,
    Step,
    FlowDiagram,
    ...components,
  };
}
