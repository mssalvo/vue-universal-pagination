# 📦 Vue Universal Pagination

![npm version](https://img.shields.io/npm/v/vue-universal-pagination.svg)
![npm downloads](https://img.shields.io/npm/dm/vue-universal-pagination.svg)
![license](https://img.shields.io/npm/l/vue-universal-pagination.svg)
![vue](https://img.shields.io/badge/vue-3.x-brightgreen)
![typescript](https://img.shields.io/badge/typescript-supported-blue)

👉 [[npmjs](https://www.npmjs.com/package/vue-universal-pagination)] 

👉 [[github](https://github.com/mssalvo/vue-universal-pagination)]

 

 
## ⚡ Quick Example

```vue
<UniversalPagination
  v-model="page"
  :totalPage="50"
/>
```
 

A flexible, customizable and lightweight pagination component for Vue 3.

✅ TypeScript ready  
✅ Multiple styles (themes)  
✅ Easy to use  
✅ Fully customizable  
✅ Supports client-side and server-side pagination  

---

## 🚀 Installation

```bash
npm install vue-universal-pagination
```

---

## 🎬 Demo

![Preview](https://github.com/mssalvo/vue-universal-pagination/blob/main/src/demo/default.png)

---

![Preview](https://github.com/mssalvo/vue-universal-pagination/blob/main/src/demo/round.png)

---

![Preview](https://github.com/mssalvo/vue-universal-pagination/blob/main/src/demo/dark.png)


---

![Preview](https://github.com/mssalvo/vue-universal-pagination/blob/main/src/demo/minimal.png)


---

## ☕ Buy me a coffee

If this project is useful to you in your work, consider supporting it with a coffee ☕  

👉 [[paypal.me/msalvonet](https://paypal.me/msalvonet)]

👉 [[buymeacoffee.com/mssalvo](https://buymeacoffee.com/mssalvo)]


Every support helps maintain and improve the project 🚀

---




## 📦 Usage

```ts
import { UniversalPagination } from "vue-universal-pagination";
import "vue-universal-pagination/dist/index.css";
```

```vue
<template>
  <UniversalPagination
    v-model="page"
    :totalPage="50"
    variant="dark"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const page = ref(1);
</script>
```

---

## 🌐 Server-side Pagination (API)

The component can be used with server-side data (API-driven pagination).

Instead of managing all pages locally, you fetch new data when the page changes.

---

### ✅ Example

```vue
<template>
  <UniversalPagination
    v-model="page"
    :totalPage="totalPages"
    @change="loadData"
  />

  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const page = ref(1);
const totalPages = ref(1);
const items = ref<any[]>([]);

async function loadData(p: number) {
  const res = await fetch(`/api/items?page=${p}`);
  const data = await res.json();

  items.value = data.data;
  totalPages.value = data.totalPages;
}

onMounted(() => {
  loadData(page.value);
});
</script>
```

---

### ✅ Expected API Response

```json
{
  "data": [{ "id": 1, "name": "Item 1" }],
  "totalPages": 10
}
```

---

### ✅ How it works

- The component emits a `change` event on page change
- You fetch data from your API
- Update your list and total pages

---

## ⚙️ Props

| Name | Type | Default | Description |
|------|------|--------|------------|
| modelValue | number | 1 | Current page |
| totalPage | number | — | Total number of pages |
| pageRange | number | 3 | Range of visible pages |
| variant | "default" \| "minimal" \| "dark" \| "rounded" | default | Style theme |
| position | "left" \| "center" \| "right" | center | Alignment |

---

## 🧠 TypeScript

```ts
import type { PaginationProps } from "vue-universal-pagination";
```

---

## 📄 License

MIT
