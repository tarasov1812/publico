<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head></head>
			<body>
				<h1>Informacion de la cancion5</h1>
				<h2>
					<xsl:value-of select="cancion/titulo"/>
				</h2>			
    			  <xsl:for-each select="verso">
   				 <tr>
     			 <td><xsl:value-of select="verso"/></td>
    			</tr>
   				 </xsl:for-each>
  				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>