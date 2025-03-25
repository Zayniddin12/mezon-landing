<template>
  <label
    class="group inline-flex items-center relative select-none min-h-[20px]"
    :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
    for="checkbox"
  >
    <input
      id="checkbox"
      v-bind="{ disabled }"
      type="checkbox"
      class="absolute opacity-0 invisible h-0 w-0 peer"
      :checked="modelValue"
      :value="value"
      :name="name"
      @change="handleChange"
    />
    <span
      class="duration-300 ease-in-out absolute top-0.2 left-0 inline-block h-5 w-5 rounded border-2 peer-checked:after:opacity-100 peer-checked:after:rotate-[45deg] after:transition-all after:duration-200 after:absolute after:left-[5.5px] after:top-[2px] after:w-1.5 after:h-[11px] after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[0deg] after:opacity-0 peer-checked:hover:border-grey-100 text-blue after:border-blue peer-checked:border-blue border-grey-100 peer-checked:border-primary after:border-primary peer-disabled:border-blue peer-disabled:after:border-blue"
      :class="[
        {
          '!border-red-500': error,
          'group-hover:border-primary': !disabled,
        },
      ]"
    />
     
    <span class="pl-8">
      <slot name="label">

        </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number | boolean
  label?: string
  name?: string
  value?: string | number | boolean
  disabled?: boolean
  error?: boolean
  labelStyles?: string
  span?: string
}
const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<{
  (e: 'update:modelValue', value: Props['modelValue']): void
}>()
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', props.value ? target?.value : target?.checked)
}
</script>
