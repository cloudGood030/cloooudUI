<template>
    <!-- 若用户设定了新width则使用用户设定的，不存在则用默认的 -->
    <div class="c-card" :style="width ? { width: width + 'px' } : {}">
        <!-- 若用户设定了新图片高度则使用用户设定的，不存在则用默认的 -->
        <div class="c-card-img" :style="imgHeight ? { height: height + 'px' } : {}">
            <img :src="imgSrc" alt="img" />
        </div>
        <!-- 如果是String类型则使用用户传入的字符串 -->
        <div v-if="summary" class="c-card-summary">
            {{ summary }}
        </div>
        <!-- 如果是插槽类型则放过插槽 -->
        <div v-else class="c-card-summary">
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: 'c-card',
    //组件所需的属性
    props: {
        width: {//卡片宽度
            type: Number,
            default: 0
        },
        imgSrc: {//卡片图片资源地址
            type: String,
            default: ''
        },
        imgHeight: {//图片高度
            type: Number,
            default: 0
        },
        summary: {//卡片概要
            type: String,
            default: ''
        },


    }
}
</script>
.
