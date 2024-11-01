<template>
    <div class="row align-items-center mt-3">
        <div class="col-sm-12 col-md-8 col-xl-8">
            <InfoText :title="'Planeta Natal:'" :value="character.originPlanet.name" />
            <InfoText :title="'Já foi destruído?:'" :value="character.originPlanet.isDestroyed ? 'Sim' : 'Não'" />
        </div>
        <div class="col-sm-12 col-md-4 col-xl-4">
            <img class="w-100" :src="character.originPlanet.image" :alt="character.originPlanet.name + '-image'">
        </div>
    </div>
</template>

<script>
import InfoText from '@/components/InfoText'

export default {
    name: 'CharacterPlanetInfo',
    components: {
        InfoText
    },
    props: {
        character: {
            type: Object,
            required: true
        }
    }
}
</script>