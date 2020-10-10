<template>
    <div>
        <p>about component</p>
    </div>
</template>

<script>
import * as Vues from 'vue'

console.log(Object.keys(Vues))

export default Vues.defineComponent({
    name: 'home-about',
    components: {},
    setup() {
        return {}
    }
})
</script>

<style lang="less" scoped></style>
