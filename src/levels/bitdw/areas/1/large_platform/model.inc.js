// 0x07002928 - 0x07002A28

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsSP1Triangle, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    sky_09001800, sky_09007000
} from "../../../../../textures/sky"

const bitdw_seg7_vertex_07002928 = [
    [[   205,    653,  -1101], 0, [   480,    990], [0xbe, 0xbe, 0xbe, 0xff]],
    [[   102,    653,  -1101], 0, [   224,   1244], [0xbe, 0xbe, 0xbe, 0xff]],
    [[   102,    653,   -999], 0, [     0,    990], [0xbe, 0xbe, 0xbe, 0xff]],
    [[   205,    653,   -999], 0, [   224,    734], [0xbe, 0xbe, 0xbe, 0xff]],
    [[    51,    448,   -845], 0, [  -542,    734], [0x5e, 0x69, 0x58, 0xff]],
    [[   102,    294,   -999], 0, [     0,    990], [0x5e, 0x69, 0x58, 0xff]],
    [[   205,    294,   -999], 0, [   224,    734], [0x5e, 0x69, 0x58, 0xff]],
    [[   256,    448,   -845], 0, [     0,    224], [0x5e, 0x69, 0x58, 0xff]],
    [[   307,    448,  -1203], 0, [   990,    990], [0x5e, 0x69, 0x58, 0xff]],
    [[   102,    294,  -1101], 0, [   224,   1244], [0x5e, 0x69, 0x58, 0xff]],
    [[     0,    448,  -1203], 0, [   224,   1754], [0x5e, 0x69, 0x58, 0xff]],
    [[   205,    294,  -1101], 0, [   480,    990], [0x5e, 0x69, 0x58, 0xff]],
    [[   205,    294,   -999], 0, [   224,    734], [0x38, 0x4a, 0x3d, 0xff]],
    [[   102,    294,   -999], 0, [     0,    990], [0x38, 0x4a, 0x3d, 0xff]],
    [[   102,    294,  -1101], 0, [   224,   1244], [0x38, 0x4a, 0x3d, 0xff]],
    [[   205,    294,  -1101], 0, [   480,    990], [0x38, 0x4a, 0x3d, 0xff]],
];

// 0x07002A28 - 0x07002B28
const bitdw_seg7_vertex_07002A28 = [
    [[   256,    448,   -845], 0, [     0,    224], [0x4f, 0x61, 0x55, 0xff]],
    [[   205,    294,   -999], 0, [   224,    734], [0x4f, 0x61, 0x55, 0xff]],
    [[   307,    448,  -1203], 0, [   990,    990], [0x4f, 0x61, 0x55, 0xff]],
    [[   205,    294,  -1101], 0, [   480,    990], [0x4f, 0x61, 0x55, 0xff]],
    [[     0,    448,  -1203], 0, [   224,   1754], [0x4f, 0x61, 0x55, 0xff]],
    [[   102,    294,   -999], 0, [     0,    990], [0x4f, 0x61, 0x55, 0xff]],
    [[    51,    448,   -845], 0, [  -542,    734], [0x4f, 0x61, 0x55, 0xff]],
    [[   102,    294,  -1101], 0, [   224,   1244], [0x4f, 0x61, 0x55, 0xff]],
    [[    51,    448,   -845], 0, [  -542,    734], [0x7d, 0x7d, 0x7d, 0xff]],
    [[   102,    653,   -999], 0, [     0,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[     0,    448,  -1203], 0, [   224,   1754], [0x7d, 0x7d, 0x7d, 0xff]],
    [[   102,    653,  -1101], 0, [   224,   1244], [0x7d, 0x7d, 0x7d, 0xff]],
    [[   307,    448,  -1203], 0, [   990,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[   205,    653,  -1101], 0, [   480,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[   205,    653,   -999], 0, [   224,    734], [0x7d, 0x7d, 0x7d, 0xff]],
    [[   256,    448,   -845], 0, [     0,    224], [0x7d, 0x7d, 0x7d, 0xff]],
];

// 0x07002B28 - 0x07002BA8
const bitdw_seg7_vertex_07002B28 = [
    [[     0,    448,  -1203], 0, [   224,   1754], [0x96, 0x96, 0x96, 0xff]],
    [[   102,    653,  -1101], 0, [   224,   1244], [0x96, 0x96, 0x96, 0xff]],
    [[   205,    653,  -1101], 0, [   480,    990], [0x96, 0x96, 0x96, 0xff]],
    [[   307,    448,  -1203], 0, [   990,    990], [0x96, 0x96, 0x96, 0xff]],
    [[   256,    448,   -845], 0, [     0,    224], [0x96, 0x96, 0x96, 0xff]],
    [[   205,    653,   -999], 0, [   224,    734], [0x96, 0x96, 0x96, 0xff]],
    [[   102,    653,   -999], 0, [     0,    990], [0x96, 0x96, 0x96, 0xff]],
    [[    51,    448,   -845], 0, [  -542,    734], [0x96, 0x96, 0x96, 0xff]],
];

// 0x07002BA8 - 0x07002CA8
const bitdw_seg7_vertex_07002BA8 = [
    [[  -972,   -204,   -304], 0, [  4060,    296], [0x70, 0x83, 0x73, 0xff]],
    [[ -1381,      0,   -304], 0, [  5082,    -44], [0x70, 0x83, 0x73, 0xff]],
    [[  -972,      0,   -304], 0, [  4400,    636], [0x70, 0x83, 0x73, 0xff]],
    [[  -972,      0,    311], 0, [  2012,  -1054], [0x70, 0x83, 0x73, 0xff]],
    [[ -1381,      0,    311], 0, [  1330,  -1736], [0x70, 0x83, 0x73, 0xff]],
    [[ -1381,   -204,    311], 0, [   990,  -1394], [0x70, 0x83, 0x73, 0xff]],
    [[  -972,   -204,    311], 0, [  1672,   -714], [0x70, 0x83, 0x73, 0xff]],
    [[  -147,    412,   -508], 0, [  3716,   2692], [0x70, 0x83, 0x73, 0xff]],
    [[   461,    205,   -512], 0, [  2356,   3360], [0x70, 0x83, 0x73, 0xff]],
    [[  -147,    207,   -508], 0, [  3374,   2350], [0x70, 0x83, 0x73, 0xff]],
    [[   461,    410,   -512], 0, [  2698,   3700], [0x70, 0x83, 0x73, 0xff]],
    [[  -147,    207,    515], 0, [  3728,    -28], [0x70, 0x83, 0x73, 0xff]],
    [[   466,    412,    515], 0, [  5090,    654], [0x70, 0x83, 0x73, 0xff]],
    [[  -147,    412,    515], 0, [  4068,   -368], [0x70, 0x83, 0x73, 0xff]],
    [[   466,    207,    515], 0, [  4750,    992], [0x70, 0x83, 0x73, 0xff]],
    [[ -1381,   -204,   -304], 0, [  4742,   -386], [0x70, 0x83, 0x73, 0xff]],
];

// 0x07002CA8 - 0x07002D98
const bitdw_seg7_vertex_07002CA8 = [
    [[  -972,      0,    311], 0, [  2012,  -1054], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -147,    207,    515], 0, [  3728,    -28], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -147,    412,    515], 0, [  4068,   -368], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -147,    207,   -508], 0, [  3374,   2350], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -972,   -204,   -304], 0, [  4060,    296], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -147,    412,   -508], 0, [  3716,   2692], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -972,      0,   -304], 0, [  4400,    636], [0x68, 0x7b, 0x6e, 0xff]],
    [[   466,    412,    515], 0, [  5090,    654], [0x68, 0x7b, 0x6e, 0xff]],
    [[   466,    207,    515], 0, [  4750,    992], [0x68, 0x7b, 0x6e, 0xff]],
    [[   973,    205,    307], 0, [  5588,   1840], [0x68, 0x7b, 0x6e, 0xff]],
    [[   973,      0,    307], 0, [  5248,   2180], [0x68, 0x7b, 0x6e, 0xff]],
    [[   973,    205,   -307], 0, [  1506,   4212], [0x68, 0x7b, 0x6e, 0xff]],
    [[   973,      0,   -307], 0, [  1164,   3870], [0x68, 0x7b, 0x6e, 0xff]],
    [[   461,    205,   -512], 0, [  2356,   3360], [0x68, 0x7b, 0x6e, 0xff]],
    [[   461,    410,   -512], 0, [  2698,   3700], [0x68, 0x7b, 0x6e, 0xff]],
];

// 0x07002D98 - 0x07002E88
const bitdw_seg7_vertex_07002D98 = [
    [[   466,  -1225,   -303], 0, [     0,    990], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -972,  -1228,   -304], 0, [  2356,  -1408], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -147,    207,   -508], 0, [  3374,   2350], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -972,      0,    311], 0, [  2012,  -1054], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -972,   -204,    311], 0, [  1672,   -714], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -147,    207,    515], 0, [  3728,    -28], [0x68, 0x7b, 0x6e, 0xff]],
    [[   461,    205,   -512], 0, [  2356,   3360], [0x68, 0x7b, 0x6e, 0xff]],
    [[   973,      0,   -307], 0, [  1164,   3870], [0x68, 0x7b, 0x6e, 0xff]],
    [[   466,    207,    515], 0, [  4750,    992], [0x68, 0x7b, 0x6e, 0xff]],
    [[   466,  -1225,    311], 0, [  2366,   3376], [0x68, 0x7b, 0x6e, 0xff]],
    [[   973,      0,    307], 0, [  5248,   2180], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -972,  -1228,    311], 0, [     0,    990], [0x68, 0x7b, 0x6e, 0xff]],
    [[ -1381,   -204,   -304], 0, [  4742,   -386], [0x68, 0x7b, 0x6e, 0xff]],
    [[  -972,   -204,   -304], 0, [  4060,    296], [0x68, 0x7b, 0x6e, 0xff]],
    [[ -1381,   -204,    311], 0, [   990,  -1394], [0x68, 0x7b, 0x6e, 0xff]],
];

// 0x07002E88 - 0x07002F88
const bitdw_seg7_vertex_07002E88 = [
    [[   973,      0,   -307], 0, [   990,   3032], [0x5e, 0x69, 0x58, 0xff]],
    [[   973,    205,   -307], 0, [  1502,   2522], [0x5e, 0x69, 0x58, 0xff]],
    [[   973,    205,    307], 0, [     0,    988], [0x5e, 0x69, 0x58, 0xff]],
    [[   973,      0,    307], 0, [  -544,   1496], [0x5e, 0x69, 0x58, 0xff]],
    [[ -1381,   -204,    311], 0, [  -808,   1742], [0x5e, 0x69, 0x58, 0xff]],
    [[ -1381,      0,   -304], 0, [   982,   3024], [0x5e, 0x69, 0x58, 0xff]],
    [[ -1381,   -204,   -304], 0, [   726,   3278], [0x5e, 0x69, 0x58, 0xff]],
    [[ -1381,      0,    311], 0, [  -552,   1488], [0x5e, 0x69, 0x58, 0xff]],
    [[   466,  -1225,   -304], 0, [   -28,    992], [0x38, 0x4a, 0x3d, 0xff]],
    [[   973,      0,    307], 0, [  3030,   2014], [0x38, 0x4a, 0x3d, 0xff]],
    [[   466,  -1225,    311], 0, [   996,    -30], [0x38, 0x4a, 0x3d, 0xff]],
    [[   973,      0,   -307], 0, [  2006,   3038], [0x38, 0x4a, 0x3d, 0xff]],
    [[  -972,  -1228,    311], 0, [   992,    -34], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1381,   -204,   -304], 0, [  1672,   2692], [0x38, 0x4a, 0x3d, 0xff]],
    [[  -972,  -1228,   -304], 0, [     0,    990], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1381,   -204,    311], 0, [  2696,   1668], [0x38, 0x4a, 0x3d, 0xff]],
];

// 0x07002F88 - 0x07003088
const bitdw_seg7_vertex_07002F88 = [
    [[ -1381,      0,    311], 0, [  5842,  -4890], [0xcd, 0xdf, 0xcc, 0xff]],
    [[  -972,      0,    311], 0, [  6864,  -5912], [0xcd, 0xdf, 0xcc, 0xff]],
    [[  -972,      0,   -304], 0, [  8400,  -4376], [0xcd, 0xdf, 0xcc, 0xff]],
    [[ -1381,      0,   -304], 0, [  7378,  -3354], [0xcd, 0xdf, 0xcc, 0xff]],
    [[   461,    410,   -512], 0, [ 12496,  -7432], [0xcd, 0xdf, 0xcc, 0xff]],
    [[  -147,    412,    515], 0, [  8410,  -8480], [0xcd, 0xdf, 0xcc, 0xff]],
    [[   466,    412,    515], 0, [  9942, -10012], [0xcd, 0xdf, 0xcc, 0xff]],
    [[  -147,    412,   -508], 0, [ 10964,  -5924], [0xcd, 0xdf, 0xcc, 0xff]],
    [[  -972,      0,    311], 0, [  6864,  -5912], [0xb7, 0xcd, 0xba, 0xff]],
    [[  -147,    412,    515], 0, [  8410,  -8480], [0xb7, 0xcd, 0xba, 0xff]],
    [[  -147,    412,   -508], 0, [ 10964,  -5924], [0xb7, 0xcd, 0xba, 0xff]],
    [[  -972,      0,   -304], 0, [  8400,  -4376], [0xb7, 0xcd, 0xba, 0xff]],
    [[   973,    205,   -307], 0, [  3288,   1778], [0xb7, 0xcd, 0xba, 0xff]],
    [[   461,    410,   -512], 0, [  2522,   3568], [0xb7, 0xcd, 0xba, 0xff]],
    [[   466,    412,    515], 0, [     0,    990], [0xb7, 0xcd, 0xba, 0xff]],
    [[   973,    205,    307], 0, [  1752,    244], [0xb7, 0xcd, 0xba, 0xff]],
];

// 0x07003088 - 0x07003160
const bitdw_seg7_dl_07003088 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09001800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitdw_seg7_vertex_07002928, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07002A28, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07002B28, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07003160 - 0x070032F8
const bitdw_seg7_dl_07003160 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09007000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitdw_seg7_vertex_07002BA8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07002CA8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 5,  4,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 8, 10,  9, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(14, 11, 13, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07002D98, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  0, 0x0,  2,  6,  0, 0x0),
    gsSP2Triangles( 8,  5,  9, 0x0,  8,  9, 10, 0x0),
    gsSP2Triangles(11,  9,  5, 0x0,  1, 12, 13, 0x0),
    gsSP2Triangles( 2,  1, 13, 0x0,  4, 14, 11, 0x0),
    gsSP1Triangle( 4, 11,  5, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07002E88, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07002F88, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070032F8 - 0x07003370
export const bitdw_seg7_dl_070032F8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bitdw_seg7_dl_07003088),
    gsSPDisplayList(bitdw_seg7_dl_07003160),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
