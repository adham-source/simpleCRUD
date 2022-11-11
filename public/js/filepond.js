// const inputsEditImage = document.querySelectorAll('.filepond');
// Register the plugin
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginFileEncode,
    FilePondPluginImageResize
)

// // loop over input elements
// Array.from(inputsEditImage).forEach(inputElement => {
//     // create a FilePond instance at the input element location
//     FilePond.create(inputElement),
// 	{
//         labelIdle: `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`,
//         // imagePreviewHeight: 170,
//         // imageCropAspectRatio: '1:1',
//         // imageResizeTargetWidth: 200,
//         // imageResizeTargetHeight: 200,
//         // stylePanelLayout: 'compact circle',
//         // styleLoadIndicatorPosition: 'center bottom',
//         // styleProgressIndicatorPosition: 'right bottom',
//         // styleButtonRemoveItemPosition: 'left bottom',
//         // styleButtonProcessItemPosition: 'right bottom'
// 	}
// })

FilePond.setOptions({
    stylePanelAspectRatio: 75 / 100,
    imageResizeTargetHeight: 100,
    imageResizeTargetWidth: 100
})

FilePond.parse(document.body)