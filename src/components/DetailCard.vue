<template>
    <div class="detail-card">
        <div class="row">
            <div class="col-sm-12 col-md-4 col-xl-4">
                <div class="character-detail-image" :style="backgroundComputed"></div>
            </div>
            <div class="col-sm-12 col-md-8 col-xl-8">
                <div class="row">
                    <div class="col">
                        <strong class="character-name">
                            {{ character.name }}
                        </strong>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-md-6 col-xl-6">
                        <CharacterBasicInfo :character="character" />
                    </div>
                    <div class="col-sm-12 col-md-6 col-xl-6">
                        <CharacterPlanetInfo :character="character" />
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <strong class="transformations-label">Tranformações</strong>
                        <div class="row">
                            <div class="col-sm-12 col-md-4 col-xl-4" v-for="(transformation, index) in character.transformations" :key="index">
                                <CharaterTransformations :transformation="transformation" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CharacterBasicInfo from '@/components/CharacterBasicInfo'
import CharacterPlanetInfo from '@/components/CharacterPlanetInfo'
import CharaterTransformations from '@/components/CharaterTransformations'

export default {
    name: 'DetailCard',
    components: {
        CharacterBasicInfo,
        CharacterPlanetInfo,
        CharaterTransformations
    },
    props: {
        character: {
            type: Object,
            required: true
        }
    },
    computed: {
        backgroundComputed() {
            return {
                backgroundImage: `url(${this.character.image})`
            }
        }
    }
}
</script>