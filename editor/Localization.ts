export class Localization {
    public static confirmLabel: string = "Confirm";
    public static playLabel: string = "Play";
    public static pauseLabel: string = "Pause";
    public static recordLabel : string = "Record";
    public static stopLabel: string = "Stop";
    public static effectsLabel: string = "Effects";
    public static envelopesLabel: string = "Envelopes";
    public static instSettingsLabel: string = "Instrument Settings";
    public static chorusLabel: string = "Chorus:";
    public static reverbLabel: string = "Reverb:";
    public static echoLabel: string = "Echo:";
    public static echoDelayLabel: string = "Echo Delay:";
    public static algorithmLabel: string = "Algorithm:";
    public static instAmountLabel: string = "Instrument:";
    public static volumeLabel: string = "Volume:";
    public static panLabel: string = "Pan:";
    public static panDelayLabel: string = "Delay:";
    public static waveLabel: string = "Wave:";
    public static noiseLabel: string = "Noise:";
    public static transitionLabel: string = "Transition:";
    public static clicklessLabel: string = "Clickless:";
    public static simpleLabel: string = "Simple";
    public static advancedLabel: string = "Advanced";
    public static EQLabel: string = "EQ Filt:";
    public static EQTypeLabel: string = "EQ Filt. Type:";
    public static noteFiltLabel: string = "Note Filt:";
    public static noteFiltTypeLabel: string = "Note Filt. Type:";
    public static pwmLabel: string = "Pulse Width:";
    public static pitchShiftLabel: string = "Pitch Shift:";
    public static detuneLabel: string = "Detune:";
    public static distortionLabel: string = "Distortion:";
    public static chordLabel: string = "Chords:";
    public static vibratoLabel: string = "Vibrato:";
    public static aliasingLabel: string = "Aliasing:";
    public static bitCrushLabel: string = "Bit Crush:";
    public static freqCrushLabel: string = "Freq Crush:";
    public static fadeLabel: string = "Fade:";
    public static unisonLabel: string = "Unison:";
    public static arpSpeedLabel: string = "Speed:";
    public static twoFastArpLabel: string = "Fast Two-Note:";
    public static continueThroughPatternLabel: string = "‣ In Pattern:";
    public static strumSpeedLabel: string = "‣ Spd:";
    public static slideSpeedLabel: string = "‣ Spd:";
    public static arpeggioPatternLabel: string = "‣ Arp Pattern:";
    public static arpeggioPattern1Label: string = "Pattern: Normal";
    public static arpeggioPattern2Label: string = "Pattern: Legacy";
    public static arpeggioPattern3Label: string = "Pattern: Scramble";
    public static arpeggioPattern4Label: string = "Pattern: Oscillate";
    public static arpeggioPattern5Label: string = "Pattern: Escalate";
    public static arpeggioPattern6Label: string = "Pattern: Shift";
    public static arpeggioPattern7Label: string = "Pattern: Normal (Bounce)";
    public static arpeggioPattern8Label: string = "Pattern: Scramble (Bounce)";
    public static arpeggioPattern9Label: string = "Pattern: Oscillate (Bounce)";
    public static arpeggioPattern10Label: string = "Pattern: Escalate (Bounce)";
    public static arpeggioPattern11Label: string = "Pattern: Shift (Bounce)";
    public static vibratoDepthLabel: string = "Depth:";
    public static vibratoSpeedLabel: string = "Speed:";
    public static vibratoDelayLabel: string = "Delay:";
    public static vibratoTypeLabel: string = "Type:";
    public static sustainLabel: string = "Sustain:";
    public static filterCutLabel: string = "Filter Cut:";
    public static filterPeakLabel: string = "Filter Peak:";
    public static spectrumLabel: string = "Spectrum:";
    public static harmonicsLabel: string = "Harmonics:";
    public static feedbackLabel: string = "Feedback:";
    public static feedbackVolumeLabel: string = "Fdback Vol:";
    public static instTypeLabel: string = "Type:";
    public static songScaleLabel: string = "Scale:";
    public static songKeyLabel: string = "Key:";
    public static songTempoLabel: string = "Tempo:";
    public static songRhythmLabel: string = "Rhythm:";
    public static operFreqLabel: string = "Freq:";
    public static operVolumeLabel: string = "Volume:";
    public static operWaveLabel: string = "Wave:";
    public static modSettingLabel: string = "Setting:";
    public static modTargetLabel: string = "Target:";
    public static snapScaleLabel: string = "Snap Notes to Scale";
    public static detectKeyLabel: string = "Detect Key";
    public static snapRhythmLabel: string = "Snap Notes to Rhythm";
    public static fileSettingsLabel: string = "File/Sharing";
    public static editSettingsLabel: string = "Edit/Song";
    public static preferenceSettingsLabel: string = "Preferences";
    public static bitCrushHover: string = "Bitcrusher Quantization";
    public static freqCrushHover: string = "Frequency Quantization";
    public static themePromptLabel: string = "Set Theme";
    public static theme1Label: string = "Beepbox Dark";
    public static theme2Label: string = "Beepbox Light";
    public static theme3Label: string = "Beepbox Competition Dark";
    public static theme4Label: string = "Jummbox Dark";
    public static theme5Label: string = "Forest";
    public static theme6Label: string = "Canyon";
    public static theme7Label: string = "Midnight";
    public static theme8Label: string = "Beachcombing";
    public static theme9Label: string = "Violet Verdant";
    public static theme10Label: string = "Sunset";
    public static theme11Label: string = "Autumn";
    public static theme12Label: string = "Shadowfruit";
    public static theme13Label: string = "Toxic";
    public static theme14Label: string = "Roe";
    public static theme15Label: string = "Moonlight";
    public static theme16Label: string = "Portal";
    public static theme17Label: string = "Fusion";
    public static theme18Label: string = "Inverse";
    public static theme19Label: string = "Nebula";
    public static theme20Label: string = "Roe Light";
    public static theme21Label: string = "Energized";
    public static theme22Label: string = "Neapolitan";
    public static theme23Label: string = "Poly";
    public static theme24Label: string = "Midbox";
    public static theme25Label: string = "Old Jummbox Dark";
    public static theme26Label: string = "Mono (Old Poly)";
    public static theme27Label: string = "Blutonium";
}

const language: string = window.localStorage.getItem("language") ?? "english";
if (language == "spanish") {
    Localization.confirmLabel = "Confirmar";
    Localization.playLabel = "Reproducir";
    Localization.pauseLabel = "Pausa";
    Localization.recordLabel = "Grabar";
    Localization.stopLabel = "Parar";
    Localization.effectsLabel = "Efectos";
    Localization.envelopesLabel = "Envolventes";
    Localization.instSettingsLabel = "Configuración del Instrumento";
    Localization.chorusLabel = "Coro:";
    Localization.reverbLabel = "Reverberación:";
    Localization.echoLabel = "Eco:";
    Localization.echoDelayLabel = "Retardo de Eco:";
    Localization.algorithmLabel = "Algoritmo:";
    Localization.instAmountLabel = "Instrumento:";
    Localization.volumeLabel = "Volumen:";
    Localization.panLabel = "Paneo:";
    Localization.panDelayLabel = "Retardo:";
    Localization.waveLabel = "Onda:";
    Localization.noiseLabel = "Ruido:";
    Localization.transitionLabel = "Transición:";
    Localization.clicklessLabel = "Sin Clics:";
    Localization.simpleLabel = "Sencillo";
    Localization.advancedLabel = "Avanzado";
    Localization.EQLabel = "Filt. EC:";
    Localization.EQTypeLabel = "Tipo Filt. EC:";
    Localization.noteFiltLabel = "Filt. Nota:";
    Localization.noteFiltTypeLabel = "Tipo Filt. Nota:";
    Localization.pwmLabel = "Ancho de Pulso:";
    Localization.pitchShiftLabel = "Cambio de Tono:";
    Localization.detuneLabel = "Desentonación:";
    Localization.distortionLabel = "Distorsión:";
    Localization.chordLabel = "Acordes:";
    Localization.vibratoLabel = "Vibrato:";
    Localization.aliasingLabel = "Aliasing:";
    Localization.bitCrushLabel = "Compr. Bit:";
    Localization.freqCrushLabel = "Compr. Frec:";
    Localization.fadeLabel = "Desvanecerse:";
    Localization.unisonLabel = "Unísono:";
    Localization.arpSpeedLabel = "Velocidad:";
    Localization.twoFastArpLabel = "Rapido Dos-Notas:";
    Localization.vibratoDepthLabel = "Profundidad:";
    Localization.vibratoSpeedLabel = "Velocidad:";
    Localization.vibratoDelayLabel = "Retraso:";
    Localization.vibratoTypeLabel = "Tipo:";
    Localization.sustainLabel = "Sostener:";
    Localization.filterCutLabel = "Corte de Filtro:";
    Localization.filterPeakLabel = "Pico del Filtro:";
    Localization.spectrumLabel = "Espectro:";
    Localization.harmonicsLabel = "Armónicos:";
    Localization.feedbackLabel = "Respuesta:";
    Localization.feedbackVolumeLabel = "Respue Vol:";
    Localization.instTypeLabel = "Tipo:";
    Localization.songScaleLabel = "Escala:";
    Localization.songKeyLabel = "Tono:";
    Localization.songTempoLabel = "Tempo:";
    Localization.songRhythmLabel = "Ritmo:";
    Localization.operFreqLabel = "Frec:";
    Localization.operVolumeLabel = "Volumen:";
    Localization.operWaveLabel = "Onda:";
    Localization.modSettingLabel = "Config:";
    Localization.modTargetLabel = "Destino:";
    Localization.snapScaleLabel = "Ajustar Notas a Escala";
    Localization.detectKeyLabel = "Buscar Tono";
    Localization.snapRhythmLabel = "Ajustar notas al Ritmo";
    Localization.fileSettingsLabel = "Archivos/Compartir";
    Localization.editSettingsLabel = "Modificar/Canción";
    Localization.preferenceSettingsLabel = "Preferencias";
    Localization.bitCrushHover = "Compresión de bits";
    Localization.freqCrushHover = "Compresión de frecuencias";
    Localization.themePromptLabel = "Seleccionar Tema";
    Localization.theme1Label = "Beepbox Oscuro";
    Localization.theme2Label = "Beepbox Luminoso";
    Localization.theme3Label = "Beepbox Competición Oscuro";
    Localization.theme4Label = "Jummbox Oscuro";
    Localization.theme5Label = "Bosque";
    Localization.theme6Label = "Cañón";
    Localization.theme7Label = "Medianoche";
    Localization.theme8Label = "Paseo por la Playa";
    Localization.theme9Label = "Violeta Verde";
    Localization.theme10Label = "Atardecer";
    Localization.theme11Label = "Otoño";
    Localization.theme12Label = "Fruta de Sombra";
    Localization.theme13Label = "Tóxico";
    Localization.theme14Label = "Corzo";
    Localization.theme15Label = "Luz de la Luna";
    Localization.theme16Label = "Portal";
    Localization.theme17Label = "Fusión";
    Localization.theme18Label = "Inverso";
    Localization.theme19Label = "Nebulosa";
    Localization.theme20Label = "Corzo Luminoso";
    Localization.theme21Label = "Energizado";
    Localization.theme22Label = "Napolitano";
    Localization.theme23Label = "Poly";
    Localization.theme24Label = "Midbox";
    Localization.theme25Label = "Jummbox Oscuro Viejo";
    Localization.theme26Label = "Mono (Poly Viejo)";
    Localization.theme27Label = "Blutonium";
}