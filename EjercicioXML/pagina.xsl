<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<title>La cancion</title>
				<link rel="stylesheet" type="text/css" href="style.css"/>
			</head>
			<body>
				<h1>Ejercicio XML, 1 DAW, Tarasov Aleksandr</h1>
				<img src="picture.png" />
				<h2>
					<xsl:value-of select="cancion/informacion/autor"/>
				</h2>
				<h3>
					<xsl:value-of select="cancion/informacion/titulo"/>
				</h3>
				<h3>
					<xsl:value-of select="cancion/informacion/fecha"/>
				</h3>
				
				<xsl:for-each select="cancion/texto">
					<xsl:apply-templates />
					<xsl:for-each select="estrofa/verso">
						<p>
							<xsl:value-of select="."/>
						</p>
					</xsl:for-each>			
				</xsl:for-each>	
			</body>
		</html>
	</xsl:template>	
	<xsl:template match ="estrofa">
		<span>🔥</span>
	</xsl:template>		
</xsl:stylesheet>