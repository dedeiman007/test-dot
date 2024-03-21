"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      {/* Body Content */}
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden h-slider">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../slider-1.jpg" alt="" title="" />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../slider-2.jpg" alt="" title="" />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../slider-3.jpg" alt="" title="" />
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-10 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-10 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="px-4 lg:px-16 py-4 lg:py-8">
        <div className="grid grid-flow-row-dense lg:grid-cols-3 lg:gap-4">
          <div className="lg:col-span-2">
            <h2 className="title font-bold">Tampilan Rumah</h2>
            <div className="grid lg:grid-cols-3 lg:gap-4">
              <div className="box-product mt-4">
                <img src="../rumah-1.png" className="w-full" alt="" />
                <h2 className="text-size-20 font-bold mt-5">Ruang Keluarga</h2>
                <div className="text-size-14 mt-1">2.0 x 2.9</div>
              </div>
              <div className="box-product mt-4">
                <img src="../rumah-2.png" className="w-full" alt="" />
                <h2 className="text-size-20 font-bold mt-5">Kamar Tidur</h2>
                <div className="text-size-14 mt-1">4.0 x 3.4</div>
              </div>
              <div className="box-product mt-4">
                <img src="../rumah-3.png" className="w-full" alt="" />
                <h2 className="text-size-20 font-bold mt-5">
                  Ruang Makan & Dapur
                </h2>
                <div className="text-size-14 mt-1">3.0 x 2.9</div>
              </div>
              <div className="box-product mt-4">
                <img src="../rumah-2.png" className="w-full" alt="" />
                <h2 className="text-size-20 font-bold mt-5">Ruang Kerja</h2>
                <div className="text-size-14 mt-1">2.0 x 2.9</div>
              </div>
              <div className="box-product mt-4">
                <img src="../rumah-2.png" className="w-full" alt="" />
                <h2 className="text-size-20 font-bold mt-5">Kamar tidur</h2>
                <div className="text-size-14 mt-1">4.0 x 3.4</div>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <div className="box">
              <h2 className="font-semibold text-size-24">Omah Apik 3</h2>
              <div className="mt-2 flex items-center">
                <img
                  src="../studio-icon.png"
                  width="30"
                  className="me-1"
                  alt=""
                />
                <div className="text-size-14">Studio SAe</div>
              </div>
              <div className="mt-2 flex flex-row text-size-14">
                <div className="basis-4/12">Jenis Rumah</div>
                <div className="basis-8/12 font-medium">Scandinavian</div>
              </div>
              <div className="mt-2 flex flex-row text-size-14">
                <div className="basis-4/12">Tipe Desain</div>
                <div className="basis-8/12">
                  <div className="text-orangePrimary flex items-center">
                    <img
                      src="../check-orange-icon.png"
                      width="15"
                      className="me-1.5"
                      alt=""
                    />
                    Dapat Dimodifikasi
                  </div>
                </div>
              </div>
              <div className="py-5">
                <hr />
              </div>
              <div className="grid grid-cols-4 gap-1">
                <div className="text-graysemiThin">
                  <center>
                    <img src="../dimensi.png" width="25" alt="" />
                    <div className="text-size-12 mt-1 text-graySemiThin">
                      Dimensi Tanah
                    </div>
                    <div className="text-size-14 font-medium">15 x 8m</div>
                  </center>
                </div>
                <div className="text-graysemiThin">
                  <center>
                    <img src="../luas.png" width="25" alt="" />
                    <div className="text-size-12 mt-1 text-graySemiThin">
                      Luas Bangunan
                    </div>
                    <div className="text-size-14 font-medium">
                      112m<sup>2</sup>
                    </div>
                  </center>
                </div>
                <div className="text-graysemiThin">
                  <center>
                    <img src="../lantai.png" width="25" alt="" />
                    <div className="text-size-12 mt-1 text-graySemiThin">
                      Lantai
                    </div>
                    <div className="text-size-14 font-medium">2</div>
                  </center>
                </div>
                <div className="text-graysemiThin">
                  <center>
                    <img src="../kamar-tidur.png" width="25" alt="" />
                    <div className="text-size-12 mt-1 text-graySemiThin">
                      Kamar Tidur
                    </div>
                    <div className="text-size-14 font-medium">4</div>
                  </center>
                </div>
              </div>
              <div className="py-5">
                <hr />
              </div>
              <div>
                <div className="text-size-14 font-medium">Harga Desain</div>
                <div className="text-size-32 font-semibold">Rp. 32.500.000</div>
                <div className="text-graySemiThin text-size-14">
                  Harga konstruksi mulai dari Rp 560.000.000
                </div>
                <div className="mt-4">
                  <a
                    className="hidden lg:inline-block py-2 px-6 w-full text-center bg-orangePrimary text-white font-medium rounded-md transition"
                    href="#"
                  >
                    Konsultasi Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="title font-bold mt-10 lg:mt-36">
          Desain Lainnya oleh Studio SAe
        </h2>
        <div className="grid grid-flow-row-dense lg:grid-cols-4 gap-4">
          <div className="box-product mt-4 lg:mb-4">
            <img src="../desain-rumah.png" className="w-full" alt="" />
            <div className="flex items-center mt-6">
              <h2 className="text-size-20 font-bold mb-0 me-3">Omah Apik 1</h2>
              <div className="px-3 py-1 bg-grayTag rounded-full">
                Scandinavian
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <img
                src="../studio-icon.png"
                width="30"
                className="me-1"
                alt=""
              />
              <div className="text-size-14">Studio SAe</div>
            </div>
            <div className="grid grid-cols-4 mt-4">
              <div className="text-graysemiThin">
                <center>
                  <img src="../dimensi.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Dimensi Tanah
                  </div>
                  <div className="text-size-14 font-medium">15 x 8m</div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../luas.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Luas Bangunan
                  </div>
                  <div className="text-size-14 font-medium">
                    112m<sup>2</sup>
                  </div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../lantai.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Lantai
                  </div>
                  <div className="text-size-14 font-medium">2</div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../kamar-tidur.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Kamar Tidur
                  </div>
                  <div className="text-size-14 font-medium">4</div>
                </center>
              </div>
            </div>
            <div className="py-5">
              <hr />
            </div>
            <div>
              <div className="text-size-14 font-medium">Harga Desain</div>
              <div className="text-size-24 font-semibold">Rp. 32.500.000</div>
              <div className="text-graySemiThin text-size-14">
                Harga konstruksi mulai dari Rp 560.000.000
              </div>
              <div className="mt-4">
                <a
                  className="hidden lg:inline-block py-2 px-6 w-full text-center bg-white border border-orangePrimary text-orangePrimary font-medium rounded-md transition"
                  href="#"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
          <div className="box-product mt-0 lg:mt-4">
            <img src="../desain-rumah.png" className="w-full" alt="" />
            <div className="flex items-center mt-6">
              <h2 className="text-size-20 font-bold mb-0 me-3">Omah Apik 2</h2>
              <div className="px-3 py-1 bg-grayTag rounded-full">
                Scandinavian
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <img
                src="../studio-icon.png"
                width="30"
                className="me-1"
                alt=""
              />
              <div className="text-size-14">Studio SAe</div>
            </div>
            <div className="grid grid-cols-4 mt-4">
              <div className="text-graysemiThin">
                <center>
                  <img src="../dimensi.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Dimensi Tanah
                  </div>
                  <div className="text-size-14 font-medium">15 x 8m</div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../luas.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Luas Bangunan
                  </div>
                  <div className="text-size-14 font-medium">
                    112m<sup>2</sup>
                  </div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../lantai.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Lantai
                  </div>
                  <div className="text-size-14 font-medium">2</div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../kamar-tidur.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Kamar Tidur
                  </div>
                  <div className="text-size-14 font-medium">4</div>
                </center>
              </div>
            </div>
            <div className="py-5">
              <hr />
            </div>
            <div>
              <div className="text-size-14 font-medium">Harga Desain</div>
              <div className="text-size-24 font-semibold">Rp. 32.500.000</div>
              <div className="text-graySemiThin text-size-14">
                Harga konstruksi mulai dari Rp 560.000.000
              </div>
              <div className="mt-4">
                <a
                  className="hidden lg:inline-block py-2 px-6 w-full text-center bg-white border border-orangePrimary text-orangePrimary font-medium rounded-md transition"
                  href="#"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
          <div className="box-product mt-0 lg:mt-4">
            <img src="../desain-rumah.png" className="w-full" alt="" />
            <div className="flex items-center mt-6">
              <h2 className="text-size-20 font-bold mb-0 me-3">Omah Apik 3</h2>
              <div className="px-3 py-1 bg-grayTag rounded-full">
                Scandinavian
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <img
                src="../studio-icon.png"
                width="30"
                className="me-1"
                alt=""
              />
              <div className="text-size-14">Studio SAe</div>
            </div>
            <div className="grid grid-cols-4 mt-4">
              <div className="text-graysemiThin">
                <center>
                  <img src="../dimensi.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Dimensi Tanah
                  </div>
                  <div className="text-size-14 font-medium">15 x 8m</div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../luas.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Luas Bangunan
                  </div>
                  <div className="text-size-14 font-medium">
                    112m<sup>2</sup>
                  </div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../lantai.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Lantai
                  </div>
                  <div className="text-size-14 font-medium">2</div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../kamar-tidur.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Kamar Tidur
                  </div>
                  <div className="text-size-14 font-medium">4</div>
                </center>
              </div>
            </div>
            <div className="py-5">
              <hr />
            </div>
            <div>
              <div className="text-size-14 font-medium">Harga Desain</div>
              <div className="text-size-24 font-semibold">Rp. 32.500.000</div>
              <div className="text-graySemiThin text-size-14">
                Harga konstruksi mulai dari Rp 560.000.000
              </div>
              <div className="mt-4">
                <a
                  className="hidden lg:inline-block py-2 px-6 w-full text-center bg-white border border-orangePrimary text-orangePrimary font-medium rounded-md transition"
                  href="#"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
          <div className="box-product mt-0 lg:mt-4">
            <img src="../desain-rumah.png" className="w-full" alt="" />
            <div className="flex items-center mt-6">
              <h2 className="text-size-20 font-bold mb-0 me-3">Omah Apik 4</h2>
              <div className="px-3 py-1 bg-grayTag rounded-full">
                Scandinavian
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <img
                src="../studio-icon.png"
                width="30"
                className="me-1"
                alt=""
              />
              <div className="text-size-14">Studio SAe</div>
            </div>
            <div className="grid grid-cols-4 mt-4">
              <div className="text-graysemiThin">
                <center>
                  <img src="../dimensi.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Dimensi Tanah
                  </div>
                  <div className="text-size-14 font-medium">15 x 8m</div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../luas.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Luas Bangunan
                  </div>
                  <div className="text-size-14 font-medium">
                    112m<sup>2</sup>
                  </div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../lantai.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Lantai
                  </div>
                  <div className="text-size-14 font-medium">2</div>
                </center>
              </div>
              <div className="text-graysemiThin">
                <center>
                  <img src="../kamar-tidur.png" width="25" alt="" />
                  <div className="text-size-12 mt-1 text-graySemiThin">
                    Kamar Tidur
                  </div>
                  <div className="text-size-14 font-medium">4</div>
                </center>
              </div>
            </div>
            <div className="py-5">
              <hr />
            </div>
            <div>
              <div className="text-size-14 font-medium">Harga Desain</div>
              <div className="text-size-24 font-semibold">Rp. 32.500.000</div>
              <div className="text-graySemiThin text-size-14">
                Harga konstruksi mulai dari Rp 560.000.000
              </div>
              <div className="mt-4">
                <a
                  className="hidden lg:inline-block py-2 px-6 w-full text-center bg-white border border-orangePrimary text-orangePrimary font-medium rounded-md transition"
                  href="#"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Body Content */}
      <Footer />
    </>
  );
}
