<template>
    <div class="vux-header">
        <div class="vux-header-left">
            <a class="vux-header-back" @click.preventDefault v-show="leftOptions.showBack" :transition="transition" @click="onClickBack">{{leftOptions.backText}}</a>
            <div class="left-arrow" @click="onClickBack" v-show="leftOptions.showBack" :transition="transition"></div>
            <slot name="left"></slot>
        </div>
        <h1 class="vux-header-title" @click="$emit('on-click-title')"><span v-show="title" :transition="transition">{{title}}</span>
            <slot></slot>
        </h1>
        <div class="vux-header-right">
            <a class="vux-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
    import zheader from './z-header.js'
</script>