import type { TechStack } from "./stack.entity";

export const TECH_STACKS: TechStack[] = [
  {
    id: "stack_typescript",
    name: "TypeScript",
    category: "language",
    aliases: ["typescript", "ts"],
  },
  {
    id: "stack_react",
    name: "React",
    category: "framework",
    aliases: ["react", "react.js", "reactjs"],
  },
  {
    id: "stack_nextjs",
    name: "Next.js",
    category: "framework",
    aliases: ["next.js", "nextjs", "next js"],
  },
  {
    id: "stack_vue",
    name: "Vue",
    category: "framework",
    aliases: ["vue", "vue.js", "vuejs"],
  },
  {
    id: "stack_nuxt",
    name: "Nuxt",
    category: "framework",
    aliases: ["nuxt", "nuxt.js", "nuxtjs"],
  },
  {
    id: "stack_tanstack_query",
    name: "TanStack Query",
    category: "state",
    aliases: ["tanstack query", "tanstack-query", "react query"],
  },
  {
    id: "stack_tailwind",
    name: "Tailwind CSS",
    category: "styling",
    aliases: ["tailwind", "tailwind css", "tailwindcss"],
  },
  {
    id: "stack_nestjs",
    name: "NestJS",
    category: "backend",
    aliases: ["nestjs", "nest.js", "nest js"],
  },
  {
    id: "stack_postgresql",
    name: "PostgreSQL",
    category: "database",
    aliases: ["postgresql", "postgres"],
  },
  {
    id: "stack_redis",
    name: "Redis",
    category: "infra",
    aliases: ["redis"],
  },
];
