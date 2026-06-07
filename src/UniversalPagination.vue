<template>
  <div :class="rootClass">
  
    <div class="unipaginator-navs">
      <ul :class="ulClass || ''">
        <!-- Prev -->
        <li
          v-if="showPrevious && !hidePrevious"
          :class="[`${clsPrefix}-prev`, { [disableClsName]: currentPage <= 1 }]"
        >
          <button
            v-if="currentPage > 1"
            @click="changePage(currentPage - 1)"
            v-html="prevText"
          />
          <span v-else v-html="prevText" />
        </li>


        <!-- First + ellipsis -->
        <template v-if="pageStart > 1">
          <li v-if="showFirstEllipsis" :class="`${clsPrefix}-box`">
            <button @click="changePage(1)">1</button>
          </li>
          <li :class="`${clsPrefix}-ellipsis ${disableClsName}`">
            <span>{{ ellipsisText }}</span>
          </li>
        </template>

        <!-- Pages -->
        <li
          v-for="i in pages"
          :key="i"
          :class="[`${clsPrefix}-box`, { [activeClsName]: i === currentPage }]"
        >
          <button v-if="i !== currentPage" @click="changePage(i)">
            {{ i }}
          </button>
          <span v-else>{{ i }}</span>
        </li>

        <!-- Last + ellipsis -->
        <template v-if="pageEnd < totalPage">
          <li :class="`${clsPrefix}-ellipsis ${disableClsName}`">
            <span>{{ ellipsisText }}</span>
          </li>
          <li v-if="showLastEllipsis" :class="`${clsPrefix}-box`">
            <button @click="changePage(totalPage)">
              {{ totalPage }}
            </button>
          </li>
        </template>

        <!-- Next -->
        <li
          v-if="showNext && !hideNext"
          :class="[`${clsPrefix}-next`, { [disableClsName]: currentPage >= totalPage }]"
        >
          <button
            v-if="currentPage < totalPage"
            @click="changePage(currentPage + 1)"
            v-html="nextText"
          />
          <span v-else v-html="nextText" />
        </li>

      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";



export interface PaginationProps {
  modelValue?: number;
  totalPage: number;
  pageRange?: number;
  showPrevious?: boolean;
  showNext?: boolean;
  showFirstEllipsis?: boolean;
  showLastEllipsis?: boolean;
  ellipsisText?: string;
  prevText?: string;
  nextText?: string;
  ulClass?: string;
  hidePrevious?: boolean;
  hideNext?: boolean;
  variant?: "default" | "minimal" | "dark" | "rounded";
  position?: "left" | "center" | "right";
}


 

const props = withDefaults(defineProps<PaginationProps>(), {
  modelValue: 1,
  pageRange: 3,
  showPrevious: true,
  showNext: true,
  showFirstEllipsis: true,
  showLastEllipsis: true,
  ellipsisText: "...",
  prevText: "&laquo;",
  nextText: "&raquo;",
  ulClass: "",
  hidePrevious: false,
  hideNext: false,
  variant: "default",
  position: "center"
});


type Emits = {
  (e: "update:modelValue", value: number): void;
  (e: "change", value: number): void;
};

const emit = defineEmits<Emits>();


const currentPage = ref(props.modelValue);
 
watch(() => props.modelValue, (v) => {
  if (v !== currentPage.value) {
    currentPage.value = v;
  }
});



// config 
const clsPrefix = "unipaginator";
const activeClsName = "active";
const disableClsName = "disabled";

// calcolo start/end
const pageStart = computed(() =>
  Math.max(1, currentPage.value - props.pageRange)
);

const pageEnd = computed(() =>
  Math.min(props.totalPage, currentPage.value + props.pageRange)
);

// lista pagine
const pages = computed(() => {
  const arr: number[] = [];
  for (let i = pageStart.value; i <= pageEnd.value; i++) {
    arr.push(i);
  }
  return arr;
});

function changePage(page: number) {
  currentPage.value = page;
  emit("update:modelValue", page);
  emit("change", page);
}


const rootClass = computed(() => [
  "unipaginator",
  `unipaginator--${props.variant}`,
  `unipaginator--${props.position}`
]);


</script>
 