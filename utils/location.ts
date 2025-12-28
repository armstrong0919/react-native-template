import proj4 from "proj4"

proj4.defs([
  [
    'EPSG:4326',
    '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees'],
  [
    "EPSG:2326",
    "+proj=tmerc +lat_0=22.3121333333333 +lon_0=114.178555555556 +k=1 +x_0=836694.05 +y_0=819069.8 +ellps=intl +towgs84=-162.619,-276.959,-161.764,-0.067753,2.243648,1.158828,-1.094246 +units=m +no_defs +type=crs"
  ]
]);

/**
 * @param lngLat
 * // from WGS84 (EPSG:4326)
 * // to HK1980 (EPSG:2326)
 */
export const transformWGS84ToHK1980 = (lngLat:Array<number>)=>{
    return proj4('EPSG:4326', "EPSG:2326",lngLat)
}

/**
 * @param lngLat
 * // from HK1980 (EPSG:2326)
 * // to WGS84 (EPSG:4326)
 */
export const transformHK1980ToWGS84 = (lngLat:Array<number>)=>{
    return proj4("EPSG:2326",'EPSG:4326',lngLat)
}