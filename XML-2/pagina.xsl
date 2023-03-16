<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="style.css"/>
			</head>
			<body>
				<h2>
					<xsl:value-of select="skills/informacion/autor"/>
				</h2>
				<h3>
					<xsl:value-of select="skills/informacion/titulo"/>
				</h3>
				<h3>
					<xsl:value-of select="skills/informacion/fecha"/>
				</h3>
				
				<xsl:for-each select="skills/texto">
					<xsl:apply-templates />
					<xsl:for-each select="branch/technology">
						<p>
							<xsl:value-of select="."/>
						</p>
					</xsl:for-each>			
				</xsl:for-each>	
			</body>
		</html>
	</xsl:template>	
	<xsl:template match ="branch">
		<span>#</span>
	</xsl:template>		
</xsl:stylesheet>