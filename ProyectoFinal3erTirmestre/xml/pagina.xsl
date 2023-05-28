<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<title>Archivo XML</title>
				<link rel="stylesheet" type="text/css" href="stylexml.css" />
				<link href="../css/estilo_comun.css" rel="stylesheet" type="text/css" />
				<link type="Image/x-icon" href="../img/TA-TE-TI.ico" rel="icon" />
			</head>
			<body id="todo">
				<div id="usuario">sin indentificar</div>
				<input id="mostrar-modal" name="modal" type="radio" />
				<nav class="header-navigation">
					<ul class="ul-navigation">
						<li>
							<a href="../index.html">Pagina Principal</a>
						</li>
						<li>
							<a href="../juego.html">Juego Te-Ta-Ti</a>
						</li>
						<li id="elijido">
							<a href="#">Pagina XML</a>
						</li>
						<li>
							<a href="../ajustes.html">Ajustes</a>
						</li>
						<li>
							<a href="#">
								<label for="mostrar-modal">Mas info</label>
							</a>
						</li>
					</ul>
				</nav>

				<input id="cerrar-modal" name="modal" type="radio" />
				<label for="cerrar-modal">  X </label>
				<div id="modal">
					<h2> &#60;- - - - - - - - Cerrar</h2>
					<h4>Hecho por <div id="authorModal">Aleksndr Tarasov</div> 1DAW, CENEC
					</h4>
				</div>
				<div id="zonaModo">
					<img src="../img/dia.png" id="dia" class="zonaModo" />
					<img src="../img/noche.png" id="noche" class="zonaModo" />
				</div>
				<h1>Archivo XML</h1>
				<h2 id="author">
					<xsl:value-of select="cancion/informacion/autor" />
				</h2>
				<h3>
					<xsl:value-of select="cancion/informacion/titulo" />
				</h3>
				<h3>
					<xsl:value-of select="cancion/informacion/fecha" />
				</h3>

				<xsl:for-each select="cancion/texto">
					<xsl:apply-templates />
					<xsl:for-each select="estrofa/verso">
						<p>
							<xsl:value-of select="." />
						</p>
					</xsl:for-each>
				</xsl:for-each>
				<script src="../js/ajustes.js"></script>
				<script src="../js/mododianoche.js"></script>
			</body>
		</html>
	</xsl:template>
	<xsl:template match="estrofa">
		<span>🎵</span>
	</xsl:template>
</xsl:stylesheet>