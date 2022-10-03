export const content = {
	
    content:[

		{
			columns: [
				{
					table:{
						heights:[80,80,80,80],
						widths: [30,290],
						body:[
							[
								{text:""},{text:"FIRMA DEL PADRE O ENCARGADO",style: "header"}
							],
							[
								{text: '1.',style:"columnLeft"},{text: '',border: [false, false, false,true],}
							],
							[
								{text: '2.',style:"columnLeft"},{text: '',border: [false, false, false,true],}
							],
							[
								{text: '3.',style:"columnLeft"},{text: '',border: [false, false, false,true],}
							],
							[
								{text: '4.',style:"columnLeft"},{text: '',border: [false, false, false,true],}
							],
							[
								{text: ''},{text: 'NOTA: Debe devolverlo tres \n\t días despues de haberlo recibido',style: "subheader2"}
							],

						]
					},
					layout: {
						defaultBorder: false,
					}
			},
				{
					table:{
						heights:['*'],
						widths: [350],
						body:[
							[
								{text:`EORM CANTÓN EL LLANO`,style:"header"}
							],
							[
								{
									border: [false, false, false,true],
									text:`OCUBILA HUEHUETENANGO`,
									style:"header2"
								}
							],
							[
								{
									fillColor: '#dddddd',
									text:`INFORME DE EVALUACIÓN`,
									style:"header"
								}
							],
							[
								{
									image: './img/colegio.png',
									alignment:"center",
									width: 200
								},
							],
							[
								{
		   
									table:{
										headerRows: 1,
										heights:[40,40,40,40],
										widths: ['*', 150, '*', 70],
										body:[
											[
												{text:`Estudiante: `,style:"subheader"},{text:"Nombre estudiante",style:"text"},
												{text:`Profesor: `,style:"subheader"}, {text:"profesor",style:"text"}
											],
											[
												{text:`Grado: `,style:"subheader"},{text:"Quinto",style:"text"} ,
												{text:`Codigo: `,style:"subheader"}, {text:"fdasfda43413dad",style:"text"}
											],
											[
												{text:`Año: `,style:"subheader"},{text:"2022",style:"text"} ,"",""
											]
										]
										
									},
									layout: 'noBorders'
								}
							]
						]
					},
					layout: {
						defaultBorder: false,
					}
				}
			
			]
		},
		
		"\n\n",
		{
			style: 'tableExample',
			table: {
				heights: 40,
				widths: ['*',100, '*', '*', '*','*',100],
				body:[
				[{text: 'No.', style: 'tableHeader'},{text: 'Asignatura', style: 'tableHeader'}, {text: 'Unidad I', style: 'tableHeader'}, {text: 'Unidad II', style: 'tableHeader'},
				{text: 'Unidad III', style: 'tableHeader'},{text: 'Unidad IV', style: 'tableHeader'},{text: 'Promedio', style: 'tableHeader'}],
				[ 1, { text: 'curso 1', style: 'tableHeader' }, 34.5, 40, 50, 60, 0 ],
				[ 2, { text: 'curso 2', style: 'tableHeader' }, 34.5, 40, 50, 60, 0 ],
				[ 3, { text: 'curso 3', style: 'tableHeader' }, 34.5, 40, 50, 60, 0 ]
				]
			},
			pageOrientation: 'landscape', pageBreak: 'before'
		},
		{text:"NOTA: Sobresaliente = 90 - 100; Muy Bueno = 80 - 89; Bueno = 70 - 79; Regular = 60 - 69; Malo = 0 - 59",style:"textSimple" }
	]
}