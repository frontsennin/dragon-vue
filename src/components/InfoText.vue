<template>
    <div class="row">
        <div class="col">
            <strong class="info-title">{{ title }}</strong>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <span class="info-value">{{ value }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoText',
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },
        value: {
            type: String,
            required: true
        },
    }
}
</script>