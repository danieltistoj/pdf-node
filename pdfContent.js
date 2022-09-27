export const content = {
    content:[
        {text:"Boletin de notas",style:"header"},
        {
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
                    [{text: 'Cursos', style: 'tableHeader'}, {text: 'Unidad I', style: 'tableHeader'}, {text: 'Unidad II', style: 'tableHeader'},
                    {text: 'Unidad III', style: 'tableHeader'},{text: 'Unidad IV', style: 'tableHeader'},{text: 'Promedio', style: 'tableHeader'}],
					[{text: 'Curso 1', style: 'tableHeader'}, "Nota 1","Nota 2","Nota 3","Nota 4","Promedio"],
					[{text: 'Curso 2', style: 'tableHeader'}, 'Nota 1',"Nota 2","Nota 3","Nota 4","Promedio"],
					[{text: 'Curso 3', style: 'tableHeader'}, 'Nota 1',"Nota 2","Nota 3","Nota 4","Promedio"]
				]
			}
		},
    ]
}