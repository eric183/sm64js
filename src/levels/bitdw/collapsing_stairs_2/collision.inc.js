// Bitdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700FA3C - 0x0700FB5C
export const bitdw_seg7_collision_0700FA3C = [
    COL_INIT(),
    COL_VERTEX_INIT(0x14),
    COL_VERTEX(-409, 512, 307),
    COL_VERTEX(-716, 471, 307),
    COL_VERTEX(-716, 256, 307),
    COL_VERTEX(-716, 471, -306),
    COL_VERTEX(-716, 256, -306),
    COL_VERTEX(-409, 512, -306),
    COL_VERTEX(-409, 727, 307),
    COL_VERTEX(-409, 727, -306),
    COL_VERTEX(-101, 768, -306),
    COL_VERTEX(-101, 768, 307),
    COL_VERTEX(-1023, 215, 307),
    COL_VERTEX(-1023, 0, 307),
    COL_VERTEX(-101, 983, 307),
    COL_VERTEX(205, 1024, 307),
    COL_VERTEX(-1023, 0, -306),
    COL_VERTEX(-1637, 0, -306),
    COL_VERTEX(-1637, 0, 307),
    COL_VERTEX(-101, 983, -306),
    COL_VERTEX(205, 1024, -306),
    COL_VERTEX(-1023, 215, -306),
    COL_TRI_INIT(SURFACE_DEFAULT, 26),
    COL_TRI(0, 1, 2),
    COL_TRI(2, 3, 4),
    COL_TRI(2, 1, 3),
    COL_TRI(5, 1, 0),
    COL_TRI(5, 3, 1),
    COL_TRI(6, 5, 0),
    COL_TRI(6, 7, 5),
    COL_TRI(5, 7, 8),
    COL_TRI(4, 3, 5),
    COL_TRI(6, 0, 9),
    COL_TRI(9, 7, 6),
    COL_TRI(9, 8, 7),
    COL_TRI(10, 11, 2),
    COL_TRI(10, 14, 11),
    COL_TRI(11, 14, 15),
    COL_TRI(11, 15, 16),
    COL_TRI(12, 8, 9),
    COL_TRI(12, 17, 8),
    COL_TRI(8, 17, 18),
    COL_TRI(13, 17, 12),
    COL_TRI(13, 18, 17),
    COL_TRI(12, 9, 13),
    COL_TRI(10, 19, 14),
    COL_TRI(14, 19, 4),
    COL_TRI(2, 19, 10),
    COL_TRI(2, 4, 19),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
