# 🧰 **tstoolset**

**Open-source**, **Zero‑runtime** TypeScript **utility types** for cleaner, safer, more expressive code. <br>
![npm version](https://img.shields.io/npm/v/@insanedev2478/tstoolset)
![license](https://img.shields.io/github/license/vedanshshetti/tstoolset)

---

## 🚀 Installation

```sh
npm install @insanelabs/tstoolset
```

---

## ✨ Features

- Strong, readable primitive aliases (`String`, `Number`, `Boolean`, etc.)
- Utility containers (`Obj<T>`, `Arr<T>`, `Func<T>`)
- Template‑literal types (`UUIDV4`, `TrustableEmail`)
- Nominal typing with `Brand<T, Name>`
- Exact object enforcement with `Exact<T>`
- Safe assertion helper: `convert<T>(x)`
- Zero runtime cost — pure TypeScript
- Object schema merger with `Merge<A, B>`
- snake_case to camelCase conversion with `CamelCase<string>`

---

## 📦 Usage

### **Primitive & container helpers**

```ts
import type { String, Obj, Arr } from "@insanedev2478/tstoolset";

type User = Obj<String>;
type Tags = Arr<String>;
```

### **Exact object enforcement**

```ts
import type { Exact } from "@insanedev2478/tstoolset";

type User = { id: string };
const u: Exact<User> = { id: "123" }; // ok
const x: Exact<User> = { id: "123", a: 1 }; // ❌ extra key
```

### snake_case to camelCase 🔁

```ts
import type { CamelCase } from "@insanedev2478/tstoolset";
import { convertToCamelCase } from "@insanedev2478/tstoolset";

// Type-level examples:
type A = CamelCase<"snake_case">; // 'snakeCase'
type B = CamelCase<"multi_part_name">; // 'multiPartName'
type C = CamelCase<"alreadyCamel">; // 'alreadyCamel'

// Using a literal (type-level):
const s = "hello_world" as const;
type S = CamelCase<typeof s>; // 'helloWorld'

// Runtime helper `convertToCamelCase` preserves the typed relationship when used with literal types
const r = convertToCamelCase(s); // 'helloWorld' (type: CamelCase<typeof s>)

// It also handles dashes and spaces, and collapses multiple separators:
const r2 = convertToCamelCase("multi-part name" as const); // 'multiPartName'
const r3 = convertToCamelCase("alreadyCamel" as const); // 'alreadyCamel'
```

### **Nominal typing**

```ts
import type { Brand } from "@insanedev2478/tstoolset";

type UserId = Brand<string, "UserId">;

const id: UserId = "abc" as UserId;
```

### **Merge**

```ts
import type { Merge } from "@insanedev2478/tstoolset";
type A = { id: string; name: string };
type B = { id: number; admin: boolean };

const merged: Merge<A, B> = {
  id: 123, // overridden by B
  name: "John",
  admin: true,
};
```

### **UUID & Email template types**

```ts
import type { UUIDV4, TrustableEmail } from "@insanedev2478/tstoolset";

const id: UUIDV4 = "550e8400-e29b-41d4-a716-446655440000";
const email: TrustableEmail = "user@gmail.com";
```

### **Safe converter**

```ts
import { convert } from "@insanedev2478/tstoolset";

const fn = convert<(...args: any[]) => void>(() => {});
```

---

## 🗺️ Roadmap

- Deep utilities (`DeepPartial`, `DeepReadonly`, `DeepRequired`)
- JSON‑safe types (`JsonValue`, `JsonObject`)
- String manipulation types (`KebabCase`, `snake-case`)
- Schema‑style helpers
- More branded primitives

---

## 🤝 Contributing

I am still a 6th grader, so new releases will only be on weekends, but <br>
issues, ideas, and PRs are welcome — this project is growing fast and feedback helps shape the toolkit.

---

## 📄 License

MIT
