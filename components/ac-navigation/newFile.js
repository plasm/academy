import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const dropdown = ref(null);
const hamburger = ref(null);
const open = ref(false);
const toggleMenu = () => {
open.value = !open.value;
};

// const ignoreElRef = ref()
// const onClickOutsideHandler = [
//   (ev) => {
//     console.log(ev)
//     modal.value = false
//   },
//   { ignore: [ignoreElRef] },
// ]
onClickOutside(dropdown, () => {
open.value = false;
return open.value;
}, { ignore: [hamburger] });

const __VLS_componentsOption = {};

const __VLS_name = 'ac-navigation' as const;
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'transition', typeof __VLS_localComponents, "Transition", "transition", "transition">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg;
__VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path;
__VLS_intrinsicElements.nav; __VLS_intrinsicElements.nav;
__VLS_components.Transition; __VLS_components.Transition; __VLS_components.transition; __VLS_components.transition;
// @ts-ignore
[transition, transition,];
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, "data-name": ("ac-navigation"), class: ("mx-auto w-full border-b bg-white 2xl:max-w-7xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, "data-name": ("ac-navigation"), class: ("mx-auto w-full border-b bg-white 2xl:max-w-7xl"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("relative mx-auto flex w-full flex-col bg-white p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("relative mx-auto flex w-full flex-col bg-white p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("flex flex-row items-center justify-between lg:justify-start"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("flex flex-row items-center justify-between lg:justify-start"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["a"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("text-lg uppercase tracking-tight text-black focus:outline-none focus:ring lg:text-2xl"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("text-lg uppercase tracking-tight text-black focus:outline-none focus:ring lg:text-2xl"), href: ("/"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["span"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("uppecase focus:ring-0 lg:text-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("uppecase focus:ring-0 lg:text-lg"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_ctx.open);
{
const __VLS_25 = __VLS_intrinsicElements["button"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{ onClick: {} as any, }, ref: ("hamburger"), class: ("inline-flex items-center justify-center border p-2 text-neutral-400 hover:text-black focus:text-black focus:outline-none md:hidden"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, ref: ("hamburger"), class: ("inline-flex items-center justify-center border p-2 text-neutral-400 hover:text-black focus:text-black focus:outline-none md:hidden"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
// @ts-ignore
(__VLS_ctx.hamburger);
let __VLS_30 = { 'click': __VLS_pickEvent(__VLS_29['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_27>).onClick) };
__VLS_30 = {
click: $event => {
__VLS_ctx.toggleMenu();
// @ts-ignore
[open, hamburger, toggleMenu,];
}
};
{
const __VLS_31 = __VLS_intrinsicElements["svg"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{}, class: ("size-6"), stroke: ("currentColor"), fill: ("none"), viewBox: ("0 0 24 24"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, class: ("size-6"), stroke: ("currentColor"), fill: ("none"), viewBox: ("0 0 24 24"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
{
const __VLS_36 = __VLS_intrinsicElements["path"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, class: (({ 'hidden': __VLS_ctx.open, 'inline-flex': !__VLS_ctx.open })), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M4 6h16M4 12h16M4 18h16"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, class: (({ 'hidden': __VLS_ctx.open, 'inline-flex': !__VLS_ctx.open })), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M4 6h16M4 12h16M4 18h16"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
__VLS_styleScopedClasses = ({ 'hidden': open, 'inline-flex': !open });
}
{
const __VLS_41 = __VLS_intrinsicElements["path"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, class: (({ 'hidden': !__VLS_ctx.open, 'inline-flex': __VLS_ctx.open })), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M6 18L18 6M6 6l12 12"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: (({ 'hidden': !__VLS_ctx.open, 'inline-flex': __VLS_ctx.open })), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M6 18L18 6M6 6l12 12"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
__VLS_styleScopedClasses = ({ 'hidden': !open, 'inline-flex': open });
}
(__VLS_34.slots!).default;
}
(__VLS_28.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_46 = __VLS_intrinsicElements["nav"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, class: (({ 'flex': __VLS_ctx.open, 'hidden': !__VLS_ctx.open })), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, class: (({ 'flex': __VLS_ctx.open, 'hidden': !__VLS_ctx.open })), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
__VLS_styleScopedClasses = ({ 'flex': open, 'hidden': !open });
{
const __VLS_51 = __VLS_intrinsicElements["a"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, class: ("p-2 text-sm text-neutral-500 hover:text-blue-600 md:px-3 lg:ml-auto lg:px-6"), href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, class: ("p-2 text-sm text-neutral-500 hover:text-blue-600 md:px-3 lg:ml-auto lg:px-6"), href: ("#"), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
(__VLS_54.slots!).default;
}
{
const __VLS_56 = __VLS_intrinsicElements["a"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, class: ("p-2 text-sm text-neutral-500 hover:text-blue-600 md:px-3 lg:px-6"), href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("p-2 text-sm text-neutral-500 hover:text-blue-600 md:px-3 lg:px-6"), href: ("#"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
(__VLS_59.slots!).default;
}
{
const __VLS_61 = __VLS_intrinsicElements["div"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, ref: ("dropdown"), class: ("relative"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, ref: ("dropdown"), class: ("relative"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
// @ts-ignore
(__VLS_ctx.dropdown);
{
const __VLS_66 = __VLS_intrinsicElements["button"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{ onClick: {} as any, }, class: ("focus:shadow-outline mt-2 flex w-full flex-row items-center px-4 py-2 text-left text-sm text-neutral-500 hover:text-blue-600 focus:outline-none md:mt-0 md:inline md:w-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("focus:shadow-outline mt-2 flex w-full flex-row items-center px-4 py-2 text-left text-sm text-neutral-500 hover:text-blue-600 focus:outline-none md:mt-0 md:inline md:w-auto"), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
let __VLS_71 = { 'click': __VLS_pickEvent(__VLS_70['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_68>).onClick) };
__VLS_71 = {
click: $event => {
__VLS_ctx.toggleMenu();
// @ts-ignore
[open, open, open, open, open, open, open, open, open, open, open, open, dropdown, toggleMenu,];
}
};
{
const __VLS_72 = __VLS_intrinsicElements["span"];
const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
const __VLS_74 = __VLS_73({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>;
(__VLS_75.slots!).default;
}
{
const __VLS_77 = __VLS_intrinsicElements["svg"];
const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77);
const __VLS_79 = __VLS_78({ ...{}, fill: ("currentColor"), viewBox: ("0 0 20 20"), class: (({ 'rotate-180': __VLS_ctx.open, 'rotate-0': !__VLS_ctx.open })), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_79> & Record<string, unknown>) => void)({ ...{}, fill: ("currentColor"), viewBox: ("0 0 20 20"), class: (({ 'rotate-180': __VLS_ctx.open, 'rotate-0': !__VLS_ctx.open })), });
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>;
__VLS_styleScopedClasses = ({ 'rotate-180': open, 'rotate-0': !open });
{
const __VLS_82 = __VLS_intrinsicElements["path"];
const __VLS_83 = __VLS_elementAsFunctionalComponent(__VLS_82);
const __VLS_84 = __VLS_83({ ...{}, "fill-rule": ("evenodd"), d: ("M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"), "clip-rule": ("evenodd"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, "fill-rule": ("evenodd"), d: ("M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"), "clip-rule": ("evenodd"), });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
}
(__VLS_80.slots!).default;
}
(__VLS_69.slots!).default;
}
{
const __VLS_87 = ({} as 'Transition' extends keyof typeof __VLS_ctx ? { 'transition': typeof __VLS_ctx.Transition; } : 'transition' extends keyof typeof __VLS_ctx ? { 'transition': typeof __VLS_ctx.transition; } : typeof __VLS_resolvedLocalAndGlobalComponents).transition;
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{}, name: ("scale"), mode: ("out-in"), }));
({} as { transition: typeof __VLS_87; }).transition;
({} as { transition: typeof __VLS_87; }).transition;
const __VLS_89 = __VLS_88({ ...{}, name: ("scale"), mode: ("out-in"), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, name: ("scale"), mode: ("out-in"), });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
{
const __VLS_92 = __VLS_intrinsicElements["div"];
const __VLS_93 = __VLS_elementAsFunctionalComponent(__VLS_92);
const __VLS_94 = __VLS_93({ ...{}, class: ("absolute left-1/3 z-10 mt-3 w-screen max-w-3xl -translate-x-1/2 px-2 sm:px-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{}, class: ("absolute left-1/3 z-10 mt-3 w-screen max-w-3xl -translate-x-1/2 px-2 sm:px-0"), });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.open));
{
const __VLS_97 = __VLS_intrinsicElements["div"];
const __VLS_98 = __VLS_elementAsFunctionalComponent(__VLS_97);
const __VLS_99 = __VLS_98({ ...{}, class: ("ring-opacity/5 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_97, typeof __VLS_99> & Record<string, unknown>) => void)({ ...{}, class: ("ring-opacity/5 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"), });
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
let __VLS_101!: __VLS_NormalizeEmits<typeof __VLS_100.emit>;
{
const __VLS_102 = __VLS_intrinsicElements["div"];
const __VLS_103 = __VLS_elementAsFunctionalComponent(__VLS_102);
const __VLS_104 = __VLS_103({ ...{}, class: ("relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_102, typeof __VLS_104> & Record<string, unknown>) => void)({ ...{}, class: ("relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"), });
const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104)!;
let __VLS_106!: __VLS_NormalizeEmits<typeof __VLS_105.emit>;
{
const __VLS_107 = __VLS_intrinsicElements["div"];
const __VLS_108 = __VLS_elementAsFunctionalComponent(__VLS_107);
const __VLS_109 = __VLS_108({ ...{}, class: ("grid grid-cols-1 gap-8 lg:grid-cols-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_107, typeof __VLS_109> & Record<string, unknown>) => void)({ ...{}, class: ("grid grid-cols-1 gap-8 lg:grid-cols-2"), });
const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109)!;
let __VLS_111!: __VLS_NormalizeEmits<typeof __VLS_110.emit>;
{
const __VLS_112 = __VLS_intrinsicElements["div"];
const __VLS_113 = __VLS_elementAsFunctionalComponent(__VLS_112);
const __VLS_114 = __VLS_113({ ...{}, class: ("grid grid-cols-1 gap-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_112, typeof __VLS_114> & Record<string, unknown>) => void)({ ...{}, class: ("grid grid-cols-1 gap-8"), });
const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114)!;
let __VLS_116!: __VLS_NormalizeEmits<typeof __VLS_115.emit>;
{
const __VLS_117 = __VLS_intrinsicElements["a"];
const __VLS_118 = __VLS_elementAsFunctionalComponent(__VLS_117);
const __VLS_119 = __VLS_118({ ...{}, href: ("#"), class: ("-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50"), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_117, typeof __VLS_119> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50"), });
const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119)!;
let __VLS_121!: __VLS_NormalizeEmits<typeof __VLS_120.emit>;
{
const __VLS_122 = __VLS_intrinsicElements["div"];
const __VLS_123 = __VLS_elementAsFunctionalComponent(__VLS_122);
const __VLS_124 = __VLS_123({ ...{}, class: ("ml-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_122, typeof __VLS_124> & Record<string, unknown>) => void)({ ...{}, class: ("ml-4"), });
const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124)!;
let __VLS_126!: __VLS_NormalizeEmits<typeof __VLS_125.emit>;
{
const __VLS_127 = __VLS_intrinsicElements["p"];
const __VLS_128 = __VLS_elementAsFunctionalComponent(__VLS_127);
const __VLS_129 = __VLS_128({ ...{}, class: ("text-base font-medium text-black"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_127, typeof __VLS_129> & Record<string, unknown>) => void)({ ...{}, class: ("text-base font-medium text-black"), });
const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129)!;
let __VLS_131!: __VLS_NormalizeEmits<typeof __VLS_130.emit>;
(__VLS_130.slots!).default;
}
{
const __VLS_132 = __VLS_intrinsicElements["p"];
const __VLS_133 = __VLS_elementAsFunctionalComponent(__VLS_132);
const __VLS_134 = __VLS_133({ ...{}, class: ("mt-1 text-sm text-neutral-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_132, typeof __VLS_134> & Record<string, unknown>) => void)({ ...{}, class: ("mt-1 text-sm text-neutral-500"), });
const __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134)!;
let __VLS_136!: __VLS_NormalizeEmits<typeof __VLS_135.emit>;
(__VLS_135.slots!).default;
}
(__VLS_125.slots!).default;
}
(__VLS_120.slots!).default;
}
{
const __VLS_137 = __VLS_intrinsicElements["a"];
const __VLS_138 = __VLS_elementAsFunctionalComponent(__VLS_137);
const __VLS_139 = __VLS_138({ ...{}, href: ("#"), class: ("-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50"), }, ...__VLS_functionalComponentArgsRest(__VLS_138));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_137, typeof __VLS_139> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50"), });
const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_137, __VLS_139)!;
let __VLS_141!: __VLS_NormalizeEmits<typeof __VLS_140.emit>;
{
const __VLS_142 = __VLS_intrinsicElements["div"];
const __VLS_143 = __VLS_elementAsFunctionalComponent(__VLS_142);
const __VLS_144 = __VLS_143({ ...{}, class: ("ml-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_143));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_142, typeof __VLS_144> & Record<string, unknown>) => void)({ ...{}, class: ("ml-4"), });
const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144)!;
let __VLS_146!: __VLS_NormalizeEmits<typeof __VLS_145.emit>;
{
const __VLS_147 = __VLS_intrinsicElements["p"];
const __VLS_148 = __VLS_elementAsFunctionalComponent(__VLS_147);
const __VLS_149 = __VLS_148({ ...{}, class: ("text-base font-medium text-black"), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_147, typeof __VLS_149> & Record<string, unknown>) => void)({ ...{}, class: ("text-base font-medium text-black"), });
const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149)!;
let __VLS_151!: __VLS_NormalizeEmits<typeof __VLS_150.emit>;
(__VLS_150.slots!).default;
}
{
const __VLS_152 = __VLS_intrinsicElements["p"];
const __VLS_153 = __VLS_elementAsFunctionalComponent(__VLS_152);
const __VLS_154 = __VLS_153({ ...{}, class: ("mt-1 text-sm text-neutral-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_152, typeof __VLS_154> & Record<string, unknown>) => void)({ ...{}, class: ("mt-1 text-sm text-neutral-500"), });
const __VLS_155 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154)!;
let __VLS_156!: __VLS_NormalizeEmits<typeof __VLS_155.emit>;
(__VLS_155.slots!).default;
}
(__VLS_145.slots!).default;
}
(__VLS_140.slots!).default;
}
{
const __VLS_157 = __VLS_intrinsicElements["a"];
const __VLS_158 = __VLS_elementAsFunctionalComponent(__VLS_157);
const __VLS_159 = __VLS_158({ ...{}, href: ("#"), class: ("-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50"), }, ...__VLS_functionalComponentArgsRest(__VLS_158));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_157, typeof __VLS_159> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50"), });
const __VLS_160 = __VLS_pickFunctionalComponentCtx(__VLS_157, __VLS_159)!;
let __VLS_161!: __VLS_NormalizeEmits<typeof __VLS_160.emit>;
{
const __VLS_162 = __VLS_intrinsicElements["div"];
const __VLS_163 = __VLS_elementAsFunctionalComponent(__VLS_162);
const __VLS_164 = __VLS_163({ ...{}, class: ("ml-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_162, typeof __VLS_164> & Record<string, unknown>) => void)({ ...{}, class: ("ml-4"), });
const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_162, __VLS_164)!;
let __VLS_166!: __VLS_NormalizeEmits<typeof __VLS_165.emit>;
{
const __VLS_167 = __VLS_intrinsicElements["p"];
const __VLS_168 = __VLS_elementAsFunctionalComponent(__VLS_167);
const __VLS_169 = __VLS_168({ ...{}, class: ("text-base font-medium text-black"), }, ...__VLS_functionalComponentArgsRest(__VLS_168));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_167, typeof __VLS_169> & Record<string, unknown>) => void)({ ...{}, class: ("text-base font-medium text-black"), });
const __VLS_170 = __VLS_pickFunctionalComponentCtx(__VLS_167, __VLS_169)!;
let __VLS_171!: __VLS_NormalizeEmits<typeof __VLS_170.emit>;
(__VLS_170.slots!).default;
}
{
const __VLS_172 = __VLS_intrinsicElements["p"];
const __VLS_173 = __VLS_elementAsFunctionalComponent(__VLS_172);
const __VLS_174 = __VLS_173({ ...{}, class: ("mt-1 text-sm text-neutral-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_173));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_172, typeof __VLS_174> & Record<string, unknown>) => void)({ ...{}, class: ("mt-1 text-sm text-neutral-500"), });
const __VLS_175 = __VLS_pickFunctionalComponentCtx(__VLS_172, __VLS_174)!;
let __VLS_176!: __VLS_NormalizeEmits<typeof __VLS_175.emit>;
(__VLS_175.slots!).default;
}
(__VLS_165.slots!).default;
}
(__VLS_160.slots!).default;
}
{
const __VLS_177 = __VLS_intrinsicElements["a"];
const __VLS_178 = __VLS_elementAsFunctionalComponent(__VLS_177);
const __VLS_179 = __VLS_178({ ...{}, href: ("#"), class: ("-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50"), }, ...__VLS_functionalComponentArgsRest(__VLS_178));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_177, typeof __VLS_179> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50"), });
const __VLS_180 = __VLS_pickFunctionalComponentCtx(__VLS_177, __VLS_179)!;
let __VLS_181!: __VLS_NormalizeEmits<typeof __VLS_180.emit>;
{
const __VLS_182 = __VLS_intrinsicElements["div"];
const __VLS_183 = __VLS_elementAsFunctionalComponent(__VLS_182);
const __VLS_184 = __VLS_183({ ...{}, class: ("ml-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_182, typeof __VLS_184> & Record<string, unknown>) => void)({ ...{}, class: ("ml-4"), });
const __VLS_185 = __VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184)!;
let __VLS_186!: __VLS_NormalizeEmits<typeof __VLS_185.emit>;
{
const __VLS_187 = __VLS_intrinsicElements["p"];
const __VLS_188 = __VLS_elementAsFunctionalComponent(__VLS_187);
const __VLS_189 = __VLS_188({ ...{}, class: ("text-base font-medium text-black"), }, ...__VLS_functionalComponentArgsRest(__VLS_188));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_187, typeof __VLS_189> & Record<string, unknown>) => void)({ ...{}, class: ("text-base font-medium text-black"), });
const __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_187, __VLS_189)!;
let __VLS_191!: __VLS_NormalizeEmits<typeof __VLS_190.emit>;
(__VLS_190.slots!).default;
}
{
const __VLS_192 = __VLS_intrinsicElements["p"];
const __VLS_193 = __VLS_elementAsFunctionalComponent(__VLS_192);
const __VLS_194 = __VLS_193({ ...{}, class: ("mt-1 text-sm text-neutral-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_192, typeof __VLS_194> & Record<string, unknown>) => void)({ ...{}, class: ("mt-1 text-sm text-neutral-500"), });
const __VLS_195 = __VLS_pickFunctionalComponentCtx(__VLS_192, __VLS_194)!;
let __VLS_196!: __VLS_NormalizeEmits<typeof __VLS_195.emit>;
(__VLS_195.slots!).default;
}
(__VLS_185.slots!).default;
}
(__VLS_180.slots!).default;
}
(__VLS_115.slots!).default;
}
{
const __VLS_197 = __VLS_intrinsicElements["div"];
const __VLS_198 = __VLS_elementAsFunctionalComponent(__VLS_197);
const __VLS_199 = __VLS_198({ ...{}, class: ("grid grid-cols-1 gap-3 rounded-2xl bg-neutral-50 p-2 lg:p-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_198));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_197, typeof __VLS_199> & Record<string, unknown>) => void)({ ...{}, class: ("grid grid-cols-1 gap-3 rounded-2xl bg-neutral-50 p-2 lg:p-0"), });
const __VLS_200 = __VLS_pickFunctionalComponentCtx(__VLS_197, __VLS_199)!;
let __VLS_201!: __VLS_NormalizeEmits<typeof __VLS_200.emit>;
{
const __VLS_202 = __VLS_intrinsicElements["div"];
const __VLS_203 = __VLS_elementAsFunctionalComponent(__VLS_202);
const __VLS_204 = __VLS_203({ ...{}, class: ("grid h-full items-start gap-6 px-5 py-6 sm:gap-8 sm:p-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_203));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_202, typeof __VLS_204> & Record<string, unknown>) => void)({ ...{}, class: ("grid h-full items-start gap-6 px-5 py-6 sm:gap-8 sm:p-8"), });
const __VLS_205 = __VLS_pickFunctionalComponentCtx(__VLS_202, __VLS_204)!;
let __VLS_206!: __VLS_NormalizeEmits<typeof __VLS_205.emit>;
{
const __VLS_207 = __VLS_intrinsicElements["h3"];
const __VLS_208 = __VLS_elementAsFunctionalComponent(__VLS_207);
const __VLS_209 = __VLS_208({ ...{}, class: ("text-base font-medium text-blue-400"), }, ...__VLS_functionalComponentArgsRest(__VLS_208));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_207, typeof __VLS_209> & Record<string, unknown>) => void)({ ...{}, class: ("text-base font-medium text-blue-400"), });
const __VLS_210 = __VLS_pickFunctionalComponentCtx(__VLS_207, __VLS_209)!;
let __VLS_211!: __VLS_NormalizeEmits<typeof __VLS_210.emit>;
(__VLS_210.slots!).default;
}
{
const __VLS_212 = __VLS_intrinsicElements["div"];
const __VLS_213 = __VLS_elementAsFunctionalComponent(__VLS_212);
const __VLS_214 = __VLS_213({ ...{}, class: ("space-y-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_213));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_212, typeof __VLS_214> & Record<string, unknown>) => void)({ ...{}, class: ("space-y-2"), });
const __VLS_215 = __VLS_pickFunctionalComponentCtx(__VLS_212, __VLS_214)!;
let __VLS_216!: __VLS_NormalizeEmits<typeof __VLS_215.emit>;
{
const __VLS_217 = __VLS_intrinsicElements["a"];
const __VLS_218 = __VLS_elementAsFunctionalComponent(__VLS_217);
const __VLS_219 = __VLS_218({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm font-medium transition duration-150 ease-in-out hover:text-blue-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_218));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_217, typeof __VLS_219> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm font-medium transition duration-150 ease-in-out hover:text-blue-500"), });
const __VLS_220 = __VLS_pickFunctionalComponentCtx(__VLS_217, __VLS_219)!;
let __VLS_221!: __VLS_NormalizeEmits<typeof __VLS_220.emit>;
(__VLS_220.slots!).default;
}
{
const __VLS_222 = __VLS_intrinsicElements["a"];
const __VLS_223 = __VLS_elementAsFunctionalComponent(__VLS_222);
const __VLS_224 = __VLS_223({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_223));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_222, typeof __VLS_224> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), });
const __VLS_225 = __VLS_pickFunctionalComponentCtx(__VLS_222, __VLS_224)!;
let __VLS_226!: __VLS_NormalizeEmits<typeof __VLS_225.emit>;
(__VLS_225.slots!).default;
}
{
const __VLS_227 = __VLS_intrinsicElements["a"];
const __VLS_228 = __VLS_elementAsFunctionalComponent(__VLS_227);
const __VLS_229 = __VLS_228({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_228));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_227, typeof __VLS_229> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), });
const __VLS_230 = __VLS_pickFunctionalComponentCtx(__VLS_227, __VLS_229)!;
let __VLS_231!: __VLS_NormalizeEmits<typeof __VLS_230.emit>;
(__VLS_230.slots!).default;
}
{
const __VLS_232 = __VLS_intrinsicElements["a"];
const __VLS_233 = __VLS_elementAsFunctionalComponent(__VLS_232);
const __VLS_234 = __VLS_233({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_233));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_232, typeof __VLS_234> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), });
const __VLS_235 = __VLS_pickFunctionalComponentCtx(__VLS_232, __VLS_234)!;
let __VLS_236!: __VLS_NormalizeEmits<typeof __VLS_235.emit>;
(__VLS_235.slots!).default;
}
{
const __VLS_237 = __VLS_intrinsicElements["a"];
const __VLS_238 = __VLS_elementAsFunctionalComponent(__VLS_237);
const __VLS_239 = __VLS_238({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_238));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_237, typeof __VLS_239> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), });
const __VLS_240 = __VLS_pickFunctionalComponentCtx(__VLS_237, __VLS_239)!;
let __VLS_241!: __VLS_NormalizeEmits<typeof __VLS_240.emit>;
(__VLS_240.slots!).default;
}
{
const __VLS_242 = __VLS_intrinsicElements["a"];
const __VLS_243 = __VLS_elementAsFunctionalComponent(__VLS_242);
const __VLS_244 = __VLS_243({ ...{}, href: ("#"), class: ("inline-flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_243));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_242, typeof __VLS_244> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("inline-flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500"), });
const __VLS_245 = __VLS_pickFunctionalComponentCtx(__VLS_242, __VLS_244)!;
let __VLS_246!: __VLS_NormalizeEmits<typeof __VLS_245.emit>;
(__VLS_245.slots!).default;
}
(__VLS_215.slots!).default;
}
(__VLS_205.slots!).default;
}
(__VLS_200.slots!).default;
}
(__VLS_110.slots!).default;
}
(__VLS_105.slots!).default;
}
(__VLS_100.slots!).default;
}
(__VLS_95.slots!).default;
}
(__VLS_90.slots!).default;
}
(__VLS_64.slots!).default;
}
{
const __VLS_247 = __VLS_intrinsicElements["div"];
const __VLS_248 = __VLS_elementAsFunctionalComponent(__VLS_247);
const __VLS_249 = __VLS_248({ ...{}, class: ("inline-flex list-none items-center gap-2 lg:ml-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_248));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_247, typeof __VLS_249> & Record<string, unknown>) => void)({ ...{}, class: ("inline-flex list-none items-center gap-2 lg:ml-auto"), });
const __VLS_250 = __VLS_pickFunctionalComponentCtx(__VLS_247, __VLS_249)!;
let __VLS_251!: __VLS_NormalizeEmits<typeof __VLS_250.emit>;
{
const __VLS_252 = __VLS_intrinsicElements["button"];
const __VLS_253 = __VLS_elementAsFunctionalComponent(__VLS_252);
const __VLS_254 = __VLS_253({ ...{}, class: ("focus:shadow-outline mt-2 block px-4 py-2 text-sm text-neutral-500 hover:text-blue-600 focus:outline-none md:mt-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_253));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_252, typeof __VLS_254> & Record<string, unknown>) => void)({ ...{}, class: ("focus:shadow-outline mt-2 block px-4 py-2 text-sm text-neutral-500 hover:text-blue-600 focus:outline-none md:mt-0"), });
const __VLS_255 = __VLS_pickFunctionalComponentCtx(__VLS_252, __VLS_254)!;
let __VLS_256!: __VLS_NormalizeEmits<typeof __VLS_255.emit>;
(__VLS_255.slots!).default;
}
{
const __VLS_257 = __VLS_intrinsicElements["button"];
const __VLS_258 = __VLS_elementAsFunctionalComponent(__VLS_257);
const __VLS_259 = __VLS_258({ ...{}, class: ("group inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_258));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_257, typeof __VLS_259> & Record<string, unknown>) => void)({ ...{}, class: ("group inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white"), });
const __VLS_260 = __VLS_pickFunctionalComponentCtx(__VLS_257, __VLS_259)!;
let __VLS_261!: __VLS_NormalizeEmits<typeof __VLS_260.emit>;
(__VLS_260.slots!).default;
}
(__VLS_250.slots!).default;
}
(__VLS_49.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["mx-auto"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["border-b"];
__VLS_styleScopedClasses["bg-white"];
__VLS_styleScopedClasses["2xl:max-w-7xl"];
__VLS_styleScopedClasses["relative"];
__VLS_styleScopedClasses["mx-auto"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["flex-col"];
__VLS_styleScopedClasses["bg-white"];
__VLS_styleScopedClasses["p-5"];
__VLS_styleScopedClasses["md:flex-row"];
__VLS_styleScopedClasses["md:items-center"];
__VLS_styleScopedClasses["md:justify-between"];
__VLS_styleScopedClasses["md:px-6"];
__VLS_styleScopedClasses["lg:px-8"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["flex-row"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["justify-between"];
__VLS_styleScopedClasses["lg:justify-start"];
__VLS_styleScopedClasses["text-lg"];
__VLS_styleScopedClasses["uppercase"];
__VLS_styleScopedClasses["tracking-tight"];
__VLS_styleScopedClasses["text-black"];
__VLS_styleScopedClasses["focus:outline-none"];
__VLS_styleScopedClasses["focus:ring"];
__VLS_styleScopedClasses["lg:text-2xl"];
__VLS_styleScopedClasses["uppecase"];
__VLS_styleScopedClasses["focus:ring-0"];
__VLS_styleScopedClasses["lg:text-lg"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["justify-center"];
__VLS_styleScopedClasses["border"];
__VLS_styleScopedClasses["p-2"];
__VLS_styleScopedClasses["text-neutral-400"];
__VLS_styleScopedClasses["hover:text-black"];
__VLS_styleScopedClasses["focus:text-black"];
__VLS_styleScopedClasses["focus:outline-none"];
__VLS_styleScopedClasses["md:hidden"];
__VLS_styleScopedClasses["size-6"];
__VLS_styleScopedClasses["hidden"];
__VLS_styleScopedClasses["grow"];
__VLS_styleScopedClasses["flex-col"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["md:flex"];
__VLS_styleScopedClasses["md:flex-row"];
__VLS_styleScopedClasses["md:justify-end"];
__VLS_styleScopedClasses["md:pb-0"];
__VLS_styleScopedClasses["p-2"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["hover:text-blue-600"];
__VLS_styleScopedClasses["md:px-3"];
__VLS_styleScopedClasses["lg:ml-auto"];
__VLS_styleScopedClasses["lg:px-6"];
__VLS_styleScopedClasses["p-2"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["hover:text-blue-600"];
__VLS_styleScopedClasses["md:px-3"];
__VLS_styleScopedClasses["lg:px-6"];
__VLS_styleScopedClasses["relative"];
__VLS_styleScopedClasses["focus:shadow-outline"];
__VLS_styleScopedClasses["mt-2"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["flex-row"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["px-4"];
__VLS_styleScopedClasses["py-2"];
__VLS_styleScopedClasses["text-left"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["hover:text-blue-600"];
__VLS_styleScopedClasses["focus:outline-none"];
__VLS_styleScopedClasses["md:mt-0"];
__VLS_styleScopedClasses["md:inline"];
__VLS_styleScopedClasses["md:w-auto"];
__VLS_styleScopedClasses["ml-1"];
__VLS_styleScopedClasses["mt-1"];
__VLS_styleScopedClasses["inline"];
__VLS_styleScopedClasses["size-4"];
__VLS_styleScopedClasses["rotate-0"];
__VLS_styleScopedClasses["transition-transform"];
__VLS_styleScopedClasses["duration-200"];
__VLS_styleScopedClasses["md:-mt-1"];
__VLS_styleScopedClasses["absolute"];
__VLS_styleScopedClasses["left-1/3"];
__VLS_styleScopedClasses["z-10"];
__VLS_styleScopedClasses["mt-3"];
__VLS_styleScopedClasses["w-screen"];
__VLS_styleScopedClasses["max-w-3xl"];
__VLS_styleScopedClasses["-translate-x-1/2"];
__VLS_styleScopedClasses["px-2"];
__VLS_styleScopedClasses["sm:px-0"];
__VLS_styleScopedClasses["ring-opacity/5"];
__VLS_styleScopedClasses["overflow-hidden"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["shadow-lg"];
__VLS_styleScopedClasses["ring-1"];
__VLS_styleScopedClasses["ring-black/5"];
__VLS_styleScopedClasses["relative"];
__VLS_styleScopedClasses["grid"];
__VLS_styleScopedClasses["gap-6"];
__VLS_styleScopedClasses["bg-white"];
__VLS_styleScopedClasses["px-5"];
__VLS_styleScopedClasses["py-6"];
__VLS_styleScopedClasses["sm:gap-8"];
__VLS_styleScopedClasses["sm:p-8"];
__VLS_styleScopedClasses["grid"];
__VLS_styleScopedClasses["grid-cols-1"];
__VLS_styleScopedClasses["gap-8"];
__VLS_styleScopedClasses["lg:grid-cols-2"];
__VLS_styleScopedClasses["grid"];
__VLS_styleScopedClasses["grid-cols-1"];
__VLS_styleScopedClasses["gap-8"];
__VLS_styleScopedClasses["-m-3"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-xl"];
__VLS_styleScopedClasses["p-3"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:bg-neutral-50"];
__VLS_styleScopedClasses["ml-4"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["font-medium"];
__VLS_styleScopedClasses["text-black"];
__VLS_styleScopedClasses["mt-1"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["-m-3"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-xl"];
__VLS_styleScopedClasses["p-3"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:bg-neutral-50"];
__VLS_styleScopedClasses["ml-4"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["font-medium"];
__VLS_styleScopedClasses["text-black"];
__VLS_styleScopedClasses["mt-1"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["-m-3"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-xl"];
__VLS_styleScopedClasses["p-3"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:bg-neutral-50"];
__VLS_styleScopedClasses["ml-4"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["font-medium"];
__VLS_styleScopedClasses["text-black"];
__VLS_styleScopedClasses["mt-1"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["-m-3"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-xl"];
__VLS_styleScopedClasses["p-3"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:bg-neutral-50"];
__VLS_styleScopedClasses["ml-4"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["font-medium"];
__VLS_styleScopedClasses["text-black"];
__VLS_styleScopedClasses["mt-1"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["grid"];
__VLS_styleScopedClasses["grid-cols-1"];
__VLS_styleScopedClasses["gap-3"];
__VLS_styleScopedClasses["rounded-2xl"];
__VLS_styleScopedClasses["bg-neutral-50"];
__VLS_styleScopedClasses["p-2"];
__VLS_styleScopedClasses["lg:p-0"];
__VLS_styleScopedClasses["grid"];
__VLS_styleScopedClasses["h-full"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["gap-6"];
__VLS_styleScopedClasses["px-5"];
__VLS_styleScopedClasses["py-6"];
__VLS_styleScopedClasses["sm:gap-8"];
__VLS_styleScopedClasses["sm:p-8"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["font-medium"];
__VLS_styleScopedClasses["text-blue-400"];
__VLS_styleScopedClasses["space-y-2"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["font-medium"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:text-blue-500"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:text-blue-500"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:text-blue-500"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:text-blue-500"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:text-blue-500"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["items-start"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["hover:text-blue-500"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["list-none"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["gap-2"];
__VLS_styleScopedClasses["lg:ml-auto"];
__VLS_styleScopedClasses["focus:shadow-outline"];
__VLS_styleScopedClasses["mt-2"];
__VLS_styleScopedClasses["block"];
__VLS_styleScopedClasses["px-4"];
__VLS_styleScopedClasses["py-2"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["text-neutral-500"];
__VLS_styleScopedClasses["hover:text-blue-600"];
__VLS_styleScopedClasses["focus:outline-none"];
__VLS_styleScopedClasses["md:mt-0"];
__VLS_styleScopedClasses["group"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["justify-center"];
__VLS_styleScopedClasses["rounded-full"];
__VLS_styleScopedClasses["bg-black"];
__VLS_styleScopedClasses["px-4"];
__VLS_styleScopedClasses["py-2"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["font-semibold"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["hover:bg-neutral-700"];
__VLS_styleScopedClasses["focus:outline-none"];
__VLS_styleScopedClasses["focus-visible:outline-2"];
__VLS_styleScopedClasses["focus-visible:outline-offset-2"];
__VLS_styleScopedClasses["focus-visible:outline-black"];
__VLS_styleScopedClasses["active:bg-neutral-800"];
__VLS_styleScopedClasses["active:text-white"];
}
var __VLS_slots!: {};
// @ts-ignore
[open, open, open, open, open,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
dropdown: dropdown as typeof dropdown,
hamburger: hamburger as typeof hamburger,
open: open as typeof open,
toggleMenu: toggleMenu as typeof toggleMenu,
};
},

name: 'ac-navigation',
// data () {
//   return {
//     open: false
//   }
// }
});
return (await import('vue')).defineComponent({
setup() {
return {};
},

name: 'ac-navigation',
// data () {
//   return {
//     open: false
//   }
// }
});
})();
