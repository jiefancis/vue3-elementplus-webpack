/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-10 13:37:11
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:21:03
 */
import { ref, watch, onMounted, Ref } from 'vue'

type Status = Ref<null | number>;
export interface UseStatus {
  status: Status;
  updateStatus: (status: Status) => void;
}

export default function useStatus (): UseStatus {
  const status = ref(1)
  watch(status, (newVal, oldVal) => {
    console.log('watch status', newVal, oldVal)
  })

  function updateStatus (payload) {
    console.log('updateStatusupdateStatus', payload, status.value)
    status.value = payload
  }

  onMounted(() => {
    console.log('useStatus hook onMounted', status)
  })

  return {
    status,
    updateStatus
  }
}
