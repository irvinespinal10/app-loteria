import React from 'react';
import * as loteriaCard from './LoteriaCardNames.js'
import imgGallo       from '../images/el-gallo.jpg'      ;   
import imgDiablito    from '../images/el-diablito.jpg'   ;
import imgDama        from '../images/la-dama.jpg'       ;
import imgParaguas    from '../images/el-paraguas.jpg'   ;
import imgCatrin      from '../images/el-catrin.jpg'     ;
import imgSirena      from '../images/la-sirena.jpg'     ;
import imgEscalera    from '../images/la-escalera.jpg'   ;
import imgBotella     from '../images/la-botella.jpg'    ;
import imgBarril      from '../images/el-barril.jpg'     ;
import imgArbol       from '../images/el-arbol.jpg'      ;
import imgMelon       from '../images/el-melon.jpg'      ;
import imgValiente    from '../images/el-valiente.jpg'   ;
import imgGorrito     from '../images/el-gorrito.jpg'    ;
import imgMuerte      from '../images/la-muerte.jpg'     ;
import imgPera        from '../images/la-pera.jpg'       ;
import imgBandera     from '../images/la-bandera.jpg'    ;
import imgBandolon    from '../images/el-bandolon.jpg'   ;
import imgVioloncello from '../images/el-violoncello.jpg';
import imgGarza       from '../images/la-garza.jpg'      ;
import imgPajaro      from '../images/el-pajaro.jpg'     ;
import imgMano        from '../images/la-mano.jpg'       ;
import imgBota        from '../images/la-bota.jpg'       ;
import imgLuna        from '../images/la-luna.jpg'       ;
import imgCotorro     from '../images/el-cotorro.jpg'    ;
import imgBorracho    from '../images/el-borracho.jpg'   ;
import imgNegrito     from '../images/el-negrito.jpg'    ;
import imgCorazon     from '../images/el-corazon.jpg'    ;
import imgSandia      from '../images/la-sandia.jpg'     ;
import imgTambor      from '../images/el-tambor.jpg'     ;
import imgCamaron     from '../images/el-camaron.jpg'    ;
import imgJaras       from '../images/las-jaras.jpg'     ;
import imgMusico      from '../images/el-musico.jpg'     ;
import imgArana       from '../images/la-arana.jpg'      ;
import imgSoldado     from '../images/el-soldado.jpg'    ;
import imgEstrella    from '../images/la-estrella.jpg'   ;
import imgCazo        from '../images/el-cazo.jpg'       ;
import imgMundo       from '../images/el-mundo.jpg'      ;
import imgApache      from '../images/el-apache.jpg'     ;
import imgNopal       from '../images/el-nopal.jpg'      ;
import imgAlacran     from '../images/el-alacran.jpg'    ;
import imgRosa        from '../images/la-rosa.jpg'       ;
import imgCalavera    from '../images/la-calavera.jpg'   ;
import imgCampana     from '../images/la-campana.jpg'    ;
import imgCantarito   from '../images/el-cantarito.jpg'  ;
import imgVenado      from '../images/el-venado.jpg'     ;
import imgSol         from '../images/el-sol.jpg'        ;
import imgCorona      from '../images/la-corona.jpg'     ;
import imgChalupa     from '../images/la-chalupa.jpg'    ;
import imgPino        from '../images/el-pino.jpg'       ;
import imgPescado     from '../images/el-pescado.jpg'    ;
import imgPalma       from '../images/la-palma.jpg'      ;
import imgMaceta      from '../images/la-maceta.jpg'     ;
import imgArpa        from '../images/el-arpa.jpg'       ;
import imgRana        from '../images/la-rana.jpg'       ;
import imgMainLoteria from '../images/la-loteria-main.jpg';

export const getMainLoteriaImage = <img src={ imgMainLoteria } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />

export const getImage = (name) => {
  switch (name) {
    case loteriaCard.names.EL_GALLO       : return <img src={imgGallo      } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_DIABLITO    : return <img src={imgDiablito   } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_DAMA        : return <img src={imgDama       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_PARAGUAS    : return <img src={imgParaguas   } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_CATRIN      : return <img src={imgCatrin     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_SIRENA      : return <img src={imgSirena     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_ESCALERA    : return <img src={imgEscalera   } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_BOTELLA     : return <img src={imgBotella    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_BARRIL      : return <img src={imgBarril     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_ARBOL       : return <img src={imgArbol      } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_MELON       : return <img src={imgMelon      } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_VALIENTE    : return <img src={imgValiente   } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_GORRITO     : return <img src={imgGorrito    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_MUERTE      : return <img src={imgMuerte     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_PERA        : return <img src={imgPera       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_BANDERA     : return <img src={imgBandera    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_BANDOLON    : return <img src={imgBandolon   } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_VIOLONCELLO : return <img src={imgVioloncello} style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_GARZA       : return <img src={imgGarza      } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_PAJARO      : return <img src={imgPajaro     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_MANO        : return <img src={imgMano       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_BOTA        : return <img src={imgBota       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_LUNA        : return <img src={imgLuna       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_COTORRO     : return <img src={imgCotorro    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_BORRACHO    : return <img src={imgBorracho   } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_NEGRITO     : return <img src={imgNegrito    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_CORAZON     : return <img src={imgCorazon    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_SANDIA      : return <img src={imgSandia     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_TAMBOR      : return <img src={imgTambor     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_CAMARON     : return <img src={imgCamaron    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LAS_JARAS      : return <img src={imgJaras      } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_MUSICO      : return <img src={imgMusico     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_ARANA       : return <img src={imgArana      } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_SOLDADO     : return <img src={imgSoldado    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_ESTRELLA    : return <img src={imgEstrella   } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_CAZO        : return <img src={imgCazo       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_MUNDO       : return <img src={imgMundo      } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_APACHE      : return <img src={imgApache     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_NOPAL       : return <img src={imgNopal      } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_ALACRAN     : return <img src={imgAlacran    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_ROSA        : return <img src={imgRosa       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_CALAVERA    : return <img src={imgCalavera   } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_CAMPANA     : return <img src={imgCampana    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_CANTARITO   : return <img src={imgCantarito  } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_VENADO      : return <img src={imgVenado     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_SOL         : return <img src={imgSol        } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_CORONA      : return <img src={imgCorona     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_CHALUPA     : return <img src={imgChalupa    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_PINO        : return <img src={imgPino       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_PESCADO     : return <img src={imgPescado    } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_PALMA       : return <img src={imgPalma      } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_MACETA      : return <img src={imgMaceta     } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.EL_ARPA        : return <img src={imgArpa       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    case loteriaCard.names.LA_RANA        : return <img src={imgRana       } style={{maxHeight:'500px', padding:'10px'}} alt="logo" />;
    default                               : break;
  }
}