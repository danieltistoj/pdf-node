export const content = {
	
    content:[
        {text:"CUADRO DE REGISTRO DE CALIFICACIONES",style:"header"},
        {text:"EORM. CANTÓN EL LLANO ALDEA  OCUBILÁ",style:"header"},
        {
			style: 'tableExample',
			table: {
               
                widths: [80,200,80,150,80,130,80,60],
				body: [
					[{text:"Docente:",style:"",bold:true,border: [false, false, false,false]},{text:"Jose Daniel Tistoj Reyes",style:"",border: [false, false, false,true]},
                    {text:"Area:",style:"",bold:true,border: [false, false, false,false]},{text:"",style:"",border: [false, false, false,true]},
                    {text:"Grado:",style:"",bold:true,border: [false, false, false,false]},{text:"",style:"",border: [false, false, false,true]},
                    {text:"Sección:",style:"",bold:true,border: [false, false, false,false]},{text:"",style:"",border: [false, false, false,true]}
                    ]
                
					
				]
			},
            layout: {
                defaultBorder: false,
            }
		},
        {
			style: 'tableExample',
			table: {
                widths: [20,80,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,'*','*'],
				body: [
					[{text:"No.",bold:true},
                    {text:"Nombre del estudiante",bold:true,style:"tableHeader"},
                    {text:"Unidad I",bold:true,colSpan: 12,style:"tableHeader"},{},{},{},{},{},{},{},{},{},{},{},
                    {text:"Unidad II",bold:true,colSpan: 3,style:"tableHeader"},{},{},
                    {text:"Unidad III",bold:true,style:"tableHeader"},
                    {text:"Unidad IV",bold:true,style:"tableHeader"}
                    ],
                    [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
                
					
				]
			}
		}
	]
}