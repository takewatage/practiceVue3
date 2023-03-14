import { InjectionKey, ref } from 'vue'

export default function useLoad() {
  const state = ref<boolean>(false)
  const loadCount = ref<number>(0)

  const show = () => (state.value = true)
  const hide = () => (state.value = false)

  const onLoading = async (
    call = async () => {
      // do nothing.
    },
    errF = async (_e: unknown) => {
      // do nothing.
      console.error(_e)
    }
  ) => {
    state.value = true
    loadCount.value++
    try {
      await call()
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message)
      } else if (typeof e === 'string') {
        console.error(e)
      } else {
        console.error('unexpected error')
      }
      if (typeof errF === 'function') {
        await errF(e)
      }
    } finally {
      loadCount.value--
      if (!loadCount.value) {
        state.value = false
      }
    }
  }

  return {
    state,
    show,
    hide,
    onLoading,
  }
}
export type LoadStore = ReturnType<typeof useLoad>
export const useLoadKey: InjectionKey<ReturnType<typeof useLoad>> = Symbol('LoadStore')
