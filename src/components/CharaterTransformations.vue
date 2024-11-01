<template>
    <div class="transformation-card" v-if="transformation">
        <div class="row text-center">
            <div class="col">
                <div class="transformation-image-section">
                    <img :src="transformation.image" class="transformation-image" :alt="transformation.name + '-image'">
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col">
                <strong class="transformation-name">{{ capitalizeFirstLetter(transformation.name) }}</strong>
            </div>
        </div>
        <div class="row mt-4">
            <InfoText :title="'Ki:'" :value="transformation.ki" />
        </div>
    </div>
</template>

<script>
import InfoText from '@/components/InfoText'

export default {
    name: 'CharaterTransformations',
    components: {
        InfoText
    },
    props: {
        transformation: {
            type: Object,
            required: true
        }
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    },
}
</script>