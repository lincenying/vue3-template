<template>
    <div>
        <p>defaultValue: {{ tmpData }}</p>
        <van-button @click="clickBtn1" icon="plus" type="primary">按钮1</van-button>
        <p>ObjValue: {{ tmpObj.a }}</p>
        <van-button @click="clickBtn2" icon="plus" type="primary">按钮2</van-button>
        <van-loading />
        <van-loading type="spinner" />
    </div>
</template>

<script>
import { defineComponent, ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'home-index',
    components: {},
    setup() {
        // 接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象具有指向内部值的单个 property .value
        const tmpData = ref(1)
        // 返回对象的响应式副本
        const tmpObj = reactive({
            a: 1,
            b: 2
        })
        const router = useRouter()
        const store = useStore()
        console.log(router, store)
        const clickBtn1 = () => {
            tmpData.value += 1
        }
        const clickBtn2 = () => {
            tmpObj.a += 1
        }
        watch(tmpData, (count, prevCount) => {
            console.log(count, prevCount)
        })
        return { tmpData, tmpObj, clickBtn1, clickBtn2 }
    }
})
</script>

<style lang="less" scoped></style>
