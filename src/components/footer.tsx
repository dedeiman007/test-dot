export default function Footer() {
  return (
    <>
      <footer
        className="bg-footer px-4 lg:px-16 py-4 lg:py-10"
        aria-labelledby="footer-heading"
      >
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div>
            <img src="../logo-white.png" width="180" alt="" />
            <p className="text-white mt-10">
              SobatBangun adalah platform digital dari SIG yang bergerak dengan
              misi mengembangkan proses pembangunan dan renovasi rumah secara
              lebih baik serta berkelanjutan.
            </p>
            <div className="flex items-center text-white mt-10">
              <img src="../mail.png" width="20" className="me-3" alt="" />
              <u>sobat@sobatbangum.com</u>
            </div>
            <div className="mt-10 text-white">Sosial Media :</div>
            <div className="flex items-center mt-4">
              <a href="" className="me-5">
                <div className="w-14 h-14 bg-ig rounded-full p-4">
                  <center>
                    <img src="../instagram.png" width="25" alt="" />
                  </center>
                </div>
              </a>
              <a href="" className="me-5">
                <div className="w-14 h-14 bg-white rounded-full p-4">
                  <center>
                    <img src="../facebook.png" width="14" alt="" />
                  </center>
                </div>
              </a>
              <a href="">
                <div className="w-14 h-14 bg-white rounded-full pt-5">
                  <center>
                    <img src="../youtube.png" width="25" alt="" />
                  </center>
                </div>
              </a>
            </div>
          </div>
          <div className="">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className="text-size-20 text-white font-semibold mt-4 lg:mt-0">
                  Produk & Layanan
                </div>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-white font-normal">
                      Renovasi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white font-normal">
                      Bangun Rumah
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white font-normal">
                      Layanan Desain
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white font-normal">
                      Teknologi Tambahan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white font-normal">
                      Beli Material
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-size-20 text-white font-semibold">
                  Tentang Kami
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-white font-normal">
                      Tentang SobatBangun
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white font-normal">
                      Kebijakan Dan Privasi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white font-normal">
                      Syarat Dan Ketentuan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white font-normal">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white font-normal">
                      Daftar Menjadi Mitra
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 mt-10">
          <div>
            <div className="text-size-16 font-semibold text-white w-full">
              Kredit Bangun Rumah
            </div>
            <div className="flex items-center">
              <img src="../mandiri.png" width={55} className="me-4" alt="" />
              <img src="../btn.png" width={55} className="me-4" alt="" />
              <img src="../bni.png" width={55} alt="" />
            </div>
          </div>
          <div>
            <div className="text-size-16 font-semibold text-white w-full">
              Tunai Via Bank Transfer
            </div>
            <div className="flex items-center">
              <img src="../mandiri.png" width={55} className="me-4" alt="" />
              <img src="../btn.png" width={55} className="me-4" alt="" />
              <img src="../btn.png" width={55} className="me-4" alt="" />
              <img src="../pertamina.png" width={55} alt="" />
            </div>
          </div>
          <div>
            <div className="text-size-16 font-semibold text-white w-full">
              Kartu Kredit
            </div>
            <div className="flex items-center">
              <img src="../visa.png" width={55} className="me-4" alt="" />
              <img
                src="../master-card.png"
                width={55}
                className="me-4"
                alt=""
              />
              <img src="../jcb.png" width={55} alt="" />
            </div>
          </div>
          <div>
            <div className="text-size-16 font-semibold text-white w-full">
              Rekan Teknologi Tambahan
            </div>
            <div className="flex items-center">
              <img src="../asco.png" width={55} className="me-4" alt="" />
              <img src="../ineco.png" width={55} className="me-4" alt="" />
              <img src="../adidaya.png" width={55} alt="" />
              <img src="../agra.png" width={55} alt="" />
            </div>
          </div>
        </div>
        <div className="lg:flex items-center mt-10">
          <div className="flex items-center">
            <div className="text-size-16 text-white me-3">Powered by :</div>
            <div>
              <img src="../sig.png" width={60} alt="" />
            </div>
          </div>
          <div className="ms-auto text-white text-size-14 mt-4 lg:mt-0">
            Copyright © 2024 SobatBangun. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
