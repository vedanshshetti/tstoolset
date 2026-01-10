# 🧰 **tstoolset**  
**Open-source**, **Zero‑runtime** TypeScript **utility types** for cleaner, safer, more expressive code. <br>
![npm version](https://img.shields.io/npm/v/@insanedev2478/tstoolset)
![license](https://img.shields.io/github/license/vedanshshetti/tstoolset)


---

## 🚀 Installation

```sh
npm install @insanedev2478/tstoolset
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
const u: Exact<User> = { id: "123" };      // ok
const x: Exact<User> = { id: "123", a: 1 } // ❌ extra key
```

### **snake_case to camelCase**
```ts
import type { CamelCase } from "@insanedev2478/tstoolset";

const str: string="snake_case";
const camelStr: CamelCase<typeof str>=str;
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
  id: 123,        // overridden by B
  name: "John",
  admin: true
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
- String manipulation types (`CamelCase`, `KebabCase`)
- Schema‑style helpers
- More branded primitives

---

## 🤝 Contributing
I am still a 6th grader, so new releases will only be on weekends, but <br>
issues, ideas, and PRs are welcome — this project is growing fast and feedback helps shape the toolkit.

---

## 📄 License

MIT
