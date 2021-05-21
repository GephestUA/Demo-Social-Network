import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusHooks from './ProfileStatusHooks'

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFRUVFRUVFRgVFxUXFRcVFRUWFhUXFxUYHSggGBolHRUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAHQBsgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADoQAAEDAgQDBQYGAgEFAQAAAAEAAhEDIQQFMUESUWETInGBkQYUMqGx8BVCUsHR4WJy8SMzkrLCB//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EADQRAAIBAgQDBAkEAwEAAAAAAAABAgMRBBIhMRNBURRhkfAFIjJCcYGhwdEVseHxQ1LCI//aAAwDAQACEQMRAD8A26eDG6N7pyUu1jYorKo5LtyX5s4uK0tUvH+R24cIlOgAkyoEdhlOlYlKbe33/I7WBTAUR4JyjcnZkgE6qVMWWmDw+qrPzUCZI8kyTYpplyia7R+YeqxKmNB/PBiyhRquP5mkeUo5dLsNuSN04pn6h6qBx9MfmHzWTUZbi4Z9JQ6GIJNmJXC+32HVr6myczp8/kUI5tT04vkqPuz3XLYQywN1gHqkS18/go8ttC67MheHEoL856FVquOYBf5KhUxrDzTqEn7prwXM1/xp36URua8wsF2Nb1QDjiVuFLpYK4fU6pmMnoiFx1JEc7rkWY0q1TxvMlSnGpF6F6dOlLf9/wCDqGMkWePUShPwJO/zWSzFNWhh8yDevioSrVI7Lz4l44Sn1f0/AQZf/mUengiPzFUcRiw8yfQWVzBYxgEX9U3E0u0TeHntGS+ZabTO5VrCUbyTYKVBjDeR8lZbT4dwuStjIOLjB2ffoPSwlRTTqLT5BuGyGbaqD6xbsouAqDkQvMVKS9ae3U9FTV7Io5iNwVkOeSVfzEOa7hGkLLcI0K9KjRtHTVdSM6yb10L1KrAUziVmmqeaH26HZrj8a3M1zjii0sc5Yjai0cE0HVRrUYQjdopTk5Oxpg8QklOKPVSZQbzRWtAuFwwr2ejLSimAcwjZSZjiLQVYNQHUeaKGM3XXXxKqRV18rnHRw/Bb7yNDGB20I4cChOaBo23PZMKvQKSwtSSvFafE0sRSi7PcPITEoFOvOkIjCi6fD9poKnn2TIvBQi291o02hVsTQgzzXZh8Qno7LvOTEUm9rvuK0J0Q0Ty9E3ZnkuxTi9mcTg1yIJJ4ShOIQKRCnCYha4GgRCgQjkLOzfOKOHaXVHgECzQQXu6BvmOiZXbshJK2rLDmoTmrnss9sm1eLiplve7kSZH+RG89NwtgZm38zXNtJtIHpcjrEeC07wdmPCm5xzR1QbhToPv9L9Y+aSXMHhy6PwOYbnx3aEelnsbBc6KZU2sKuqFK1raHS6tRyvzOibn/ADa36JD2h/xHquddSKYNV40qaWn3Oebm3r+yOldn3QfNRfmgfqXDwKxKTFZbTU5RgtrlYpvV28C3XptedXeqquy3k5TmFIPSKpVjtIZ0aUt4lR2AI/MiMocO6K9yq1HlWVSpPdkZUaMNUjRoYgsjvGyIM0AM8MrLY7ZTSuCvdj39WyNWnmznGFeNSmW3iVzzXQiCp1UpQ/10Gjl3lqXcYxjrNACA3BMjUT4ILqsboTsSdkYqdrJgcYb2DuwDdkGvlm7SCo+8Hmk/GhokmAm/9FsZRjzBjAunRFfhCzUjw39FSxGbmO75Tb66BZ+V13ueeF7uAky4weJ9p4OLSP29C6dRq7DGpTTsjoqTgrDarYmWxMajVZH4jwkDh4nCzogW3MctfuFCriKFYEAd6TZwIdxaxoSFKVFvc6FVS0TN1tRhMSJ8Uc8I5LlDTJIqU3NcQQDxAyRO+87Sj1YIJHCToZMADQ66bn+UOy9GbtC6HV08XGmiMczPNcTh8yfSbDocBpBBIFtR0nbVXWY+wdILTJ2+RHnY8vVZYHXXUyxmh1Ts2cU4zVw0WCcSAJNpVStmbQJn5FaOAg1ZLQWWMktTosTmbnjWFnPc48yquBxQfcEEaea0H4pjNXDwkSn4fBeWKFT43rSehXFNx1sptoibu9FVr45xsLKtXxXCJc7oALkzpZdEaM2tdDndSCfq3feaDXRup085Y3R0m+nTVc3i61VwgNLQefL+Fq+6sqUmNH5B3ZHC4czInU+SlVoRa1Vy9GrNdxfHtbESIBOuoHUnYLQZn7+i5Ovln+2/KL6/t6K1gcA5reHtHR1ufU7KX6fh98qKvF1r7nSfizjuiNzFxCzGUgAPuVYoslSlQpRWxSNWo3uauCzVzbG45K07GGpaI6hVcNgxqjlgGth6LgnWgpN09/PLY61h21aevnruDbhSDLapCnicW5g+IGNzZc9m+ctpglsEyAAbea5zEe07304MOcCZMWIuuqGBr17Se3elc554uhQ9W9vFnow9oW9kXb7bLLzz2jbWw/dc6lUGrZLb/wCLouNdFwA9qCAYaJOk3iNFS/HahnjAc07EbeWq6aHoeMXd3TTT3+hw1/SaXsJPfl8vOjOoy322q0HgVC6rTdrJEj/Q7+B+S7zK/bLC17Mf3hq11neh18pXixxYcbAAXgGJB1Hil2DviBAt89NNl21vRFCq8y0fd+PxY8+HparDSauu/fx/s91rZhRN+JDGMpH84XiVLMazSP8ArVOUXI9Dv5KNTOK4Iiq6f58dfNQj6JnBWU/2/B0fqFKb1ge4+80/1hZON9q8JScWuqAkbMl5kbHhmD4rybE5rXee9Uda0MJaCesaqk93CNx9/RWp+jH/AJJ+GhGpjo7U4eOv0O7zb/8ARHkxh6QaP1P7xI/1BgepXC1a7nuc4mXEkuJNySbkk6oLuKNDHysm4ovESu6nShTVoL8nJOcp6yJCsW6GFdbn9WIdUcRqAToYIsZ8VllpOgPVSZhXvaSGm28GOsHxRk+oIw6c97Fn8ZfyHqUll3/SUkmZ9Q8CHT6ndMqFHZJUamDgzM9ERjSNQvOzJq6PaytOzJlp0T9h0VnB6yVqNrNtEKU60oOyRaNFS1bMdtEtFxqka8K3jMU0STErMfU4rgD6J6bcleSEqRUXaLCOxRQu3VIV3ExGnXa/8I3aQefhy3+a6FBHO5lvjlGpYVztNOZWfUzFlEcTtNB1OwTtzuoWy1muk6aTPX+kk41PdXiNCVN+0/kXMwxVOg2HGX7BVcHjTVBcRH0Pgudxtd76snvGB9NOm6C7Gupu173TYGLenoqQw8ktd+ZOpiYN9EjruNNRrB+hFrHmD4LKweeMeIJgxeenVV8dmrG2Al3JpNvE7eAVOCySxEUdHVgNnUrOdjFlszF77Oc60WAA87aqbqjRcnx2gXuU9LDuK9bVkK+KUn6uhp++nkq1RzTdwk7T+3JZNXNJMMGuhdYW/wCExqVajzwAhuk/UqippbIm6knpJmlVoscIIidxrpGu1rImBoin/wBtxjcEyCqeFyypcvdHKLz4qzTwrmu1kRBlZwT0AqsovQtuY0m51k9JiOUi3VU6+XPJ4mvubOkkjxjT5K0GhuplP7w0JlQ/1Rni17zX1NHCtaRDzJAjuz/7G6T8M4gkgBvW58baLPGPaNlM5rtCXsk09PPwKfqNJrVeFwP4Yx5NzEyNp6c4WjgsI2kIEnxJI9FnjMwNAAouzh3RUlhZvS5JY6muX0NepTlSZh2H4hJ6mPosF2avO6h+Jv5oSwsrWuGONjmu0/3OpoYKm494QLWbb56rSo5RQkEjivI4tN9vNcSzOHBWGZ87muGrga8vZlb5npUfSOGS9Za/A7J+SUjpbzlKhlzKdmtGszEmfErk2e0DuZR2+0J6rneAxVrN3XzOhekMHe6aXn4HRV8LOoHoqNaidgs0+0J6pDPirUsHXjyRGrj8NJ+0XxQcUelhXLMbn3VWKefBGeHxHJAp4rCr3jTZgTutHC4MLBGejknd7QGLLhq4HEzVjthj8LE6qmI0VXMKgAklchiPaGq74AfoFTqY2uQe0eII0Fz6qUPRFVO7aGl6XoNaXYDN8vbUq8fESXGAzXpYCTtqgVfZyrUMRwQJA18zyV/LMa+mNA3raT1Ks185Os+i9ZRxEVlja3nl+TzJ1cJK8pX6+fKOdo+zVQyY9TAI581UxmTVWOiJH+EnyXSOzV7t1FuJKuuIvascknRfsJmCcjc1su1OjYkgdSN1IUOBsudAEWN5+Vv6V/HZgRAZc7+Cy34dxkmxkkAxP36J4KT3ZKrKC924MYgTyG0/DJTVH2Anh6n9tlJmBJ6HrtB5fNaFJtJuo4jEbACeQV7uxyPJcpYTgbBnjI5CQPELUwTjVdLaQJ2JAPz22VSi2gwgtpyRu4k/LRXmZsdBYdFGpFtF6VSN9Xp8CeJyKs8/9So1o5NufCBYKWHyplK5bxnm6/oEzcadSq2IzMEaqOWezf2Olzp7218S1UxrQI4QgVMztG3LQLLr4hUq1SUzow6Ee0VHszW9/byCSw7pIZIdA8Sp1OsGOvKIccSsWnVRBXSKjHodDxMluzV97KZ+NdGqyK2YNZqgjNmnQ/fh/CfgLoL2qbV0y8/FPJAM7nXfkVKtiXNItNr/ANfwqIxwOms+vgTqnxGYsaLk8X+Iv5zZUVNLkTdSTLdSq490CCRqR96SFnOzFxJjVu1ud/FBrZq54IEtjQxc9CqtFtSQ5odP2LJ4xM29Q1fFlzpdtIA2Hl1VyjmcsLCYiIJ0iY20/tBfldR5DjwibmbeOisnKm/q2IJ3MiE+Qg60Fz1BMoNiJMnlYAwZ+yoY2gImL+V7gCeuivtw1PcknnNgYjRSloi0xz++ipkOfjapoxWYRwI7pi8776R6KdPC1Hu7rYg3JEXWucWhOxK3DG48nyHpYZ4EueCdho0fyhswUmajpuLbW6bqLsQoGujlQic90XgymDPCLadPBEOK5LL94Q3VytZGyzfM1XY080F+K6rNNUqHEspIbhX3NE4pQOIVIJ02cypRRZ7ZP2iqynNQBHOHIuRY403Gg8dpO+g/dPTrBDMZwsHAKdrChdumFdHMhcsi02l1RGsaqPbpduhnQHTkzUbwpnVWhZnbpcZWzoTgvmXDiE3bKn2oUW4iUOKOqJoMMo7HALK994eqgcybMqbqXKKjpojedVBTe8ALD/EREj7P2FB2acglcojxpzZuOx52QzjXLHbjXEaC+nh9/REph79SAPFDN3C8K27LzsVO6mByus5rGtN3SAp+/U/DwQbY0YpcrmgKzpIA2VSri3xBIHgh18xZHdN1mOxc7JNCtpPZHR4SmJa6Zi19uvio4nAFzy4vBGw3WDTx5B1Kd+YO2cVroOWRuVGED4gSqzmFZPv7knYlx3TcQjwJGmQUaiSFje8HmmdiDzQc0MqMkzoKlQEQTHggnEsFguffXNv+FF9c7TG26XMivBkzUrVJKFdZhrnml27tZH3ySOYyoSRpyksv3k80kmZDcGXU2KeMbz1E/wAymONDS7WRYdf6QKODcBNp/vnHJPVwTnGQAALC+2y6VmtsQtTvvoCfX4tbynbER5+aM3Lnc2oxwrmzwxcQf3iUyi3uM6kNkyvTgwBPU7easMwdPd3l/wAITMM9un3zU20Oc+SZLuJykuUi4ylRbtfqf2Rve2jSFlVWcp80OCE2awnBUt2bL8SOaGa/VZknkoOqRss6gFh1yNF2IUDihG6zu2UmYlzbg38voUOIUVAOMZe8gfPwQH40nSyiMTOok89P2hRNU6Q30E+sSkc+8sqa6F7DEubr3p5+GqLSwbp7z2x0MrJbUgyApHEXnT72WzoV0pX0N+phGxZyEcLbYrJ9+dz+/FGbj3RO3jf0RzonwZoJVDhqIVf3pKpmJO3qq7sTyASua6lY03zRfbXbEk36BV6mIvaUBuKjZM7EA7JXLvDGlZ7EzXJ3Sp1RPeNhfnPRAc4eCgUuYqoItVcQSSUPtShpkMzMopBXVTzSp1yCI5+SCpNMEHkZWzByqwQ1jOqRrnmhFMhdhyoN2x5pxWPNATytcGVBS4pu0PND4k0oXNYIHpOcoMaSpmnGqKubRMdj7Ec49R9lRDlBRla4bFk1ztZRNY8yhKMoXMooIXlMXKBKaULhSJSnlRTrXDYkApBClJC4LBuNQL1FJa5rD8SRcoqKFw2Jl6t4eu0DkVRKiStmaNKCkrM06lRhVWtVaqig5LKoaFFLmH42pKukp5imU1W49P8AiKzm1CBA/v1TtIXSqrIuhDoaX4iU5xzlnip0Uu0KdVJdRXRj0LpxTuaJRrErO4yiUXOmwJ9UVN3FlSVjaBaPFXG4VpEkf0sfC1TMkGyOMwcDcGPA/VVUluzknRne0TTZhWi8KvicOHKu3GvcLMcfAFZ+IzotLm8Bkc+fghUrU4K8tgU8PVk9NzTblzTqq2KwHDcXQ6eYOdHCCZEi2yHj8zqMAlsTzB0m6SdWmouT2Kwp1s9r/IiaBQ2MJ0TDMg4XgO+SWExjQZnX+Y/dTVSm7Wa8/wBnRkqJO6IFyjITjEB44jAMkct7fJQ4kqmmrp6FMrWjJcQQyUiokI3GSH4k/GdNlFRlJcNifEnLlBJEFicp+JQCmAibQUpSpGimIWYLoaUwKeEoWMSa6EZtQHVAThZMVpFym9m4lGe6lHw3WapSmUybpp82NVF7IZRUxSlU7EQ8wm4iUVmHe64aT4AqTMMdTbxCKuZuKItaN1KWoZCda4r1CPDT0QS1PKkQeS24VoC4E/CnTkJQ3Y0JJ5SWMRTwnTrGIKUJSnWsAaE0KSYrGIkKBaiJigMmDIUHBTKgVKQ6BpKSSQcTQpBazMpbNyYVz3CkBJER93XTGjI5ZYqC6mAwKxSoFxsreKxlFlMcLWcRHLaDofJUMxzaHg0e6OBh8zJcL+I/8Ek6tOCu3fbbvHiqlTaNt99tOpfdl3DE7mB4xP7IHvwbuCO8PGACquaZ06s0CILahIjSIMCOnNZPHK562NSlalt1KUcLOUb1d+nn5G5mGcnihgjuFnmbzpyhWKefRPdBAa29wZ4IMCI+Jc650plDttZSbT86/kr2Ki4pNefPgdOM+aKLmiQ8M4B17mvRc1UrEknmZ+v8qPEmlTrYidW2bkPRw0KV8vMuYfMajS0z8LDTH+hMqGLxj6nDxEktEXM+aqgpwFN1JyVm3bz+CqpwTzJK4pUhUI++sqBKSQpYOzEnha0xAqcfXYR4KPvB+sdJQ00Js8uoqgkX/eRwD9RLp84j91do4phDvhB7Nhb/ALkd4aLE4UoV4YqcfPdbz32Iyw8H577+e650DcdRvYbkafrIA+QUG42k4xwxeB6wsLgSZIIPIg+hlP26pzt4E+xw6vxN11NsxpqfREp4YH4ZPhdZFLGQXEgQRUi2heDw38YRm5u8NY0WDSCY1JDy/XwgLoWMp8/OxOWHqe753NNmW1CY4T5p3YB4FxCqYj2ieXPLbBx7vMREfT5q3gc8LqtMONoLXcpO/wAgrRxNByyq+/3t/PwISpYlLM0tr2+V/wCPiSpYR5PCGm/PT1RBltQG7Z6gyugFUIYxzTEGZJaPFsz9F28OK0bPO7VUeyMOtgncreCapgHxZhXQdoEuPqjwog7VPocw7AVIngdHgno5fUdo0/T6rp+2QziEOBHqN22o1pFGBTyuqTdpHitOlkjI7xM81a94TGunjSghJ4irLbT4Fd2S0xoT5ouHwVNuwn1TmsguetliuQuepLRtl0VQLCyiaoMgwQdVRJTNcg5GULD1sopm7SW/MfNVMTlDm/CeL6q8KiKysFPImXVaa5mXhKJbqyfEfsrD6QdbhI+i0BWCeQio2FlUbdzK/DRspuwQOq0S6FDtFsiF40mZVTKT+U+qJSy0D4gStMVeiY10MiH482rXKBy8WtATfhU6Dz0V/t0jXK2VC8aaM+nkh4jxE8PTVTxGTCO6TPVW/eikcWeS2WI3GqX3MuhlZnv2HRXTldIme95KbsX0UDjShligupVk73GrZKw/CSPmFn1cmqDSCtA41yG7FlLKMWUjUqIp08mcfiIHzVpuV0wL3Q34koTsQVPLBFM9R7hfwynyPqkq/bnmkk9XoPmn1+pLGVSKbyNeA/RYRx1TgcOI9439GpJLkxk5KSs+T+51YKEXF3XNfYpqJSSXnHehwplJJEJEp0kljMdDSSRAIKYSSQQWLdOUklmAZJJJAIgkUkkTIQUkkkDDBJJJEwzkkkkDI3cvzGpNJs2mPEdVXr1iXAHSX2vFzdJJei5NwV3zX/JwqMVUdlyf/RbyzHPFF9/gZ3RsIa+FqYbEOcDPP/5CZJduGk3ThqefiIpVJ6FgVCouqFOkuxs5LK4I1CodoU6SWQ6SEahQy8pJJWMkIvKE+qUklKT0KRSuA96d0RG4hySSW7HcV0DsqlGbVKZJUTZFpBRUKr1apSSRYsUrkWYlyI6qU6S13YayuQZWKm2qUklk2BpEzUKG6oUkkWZJAn1CgOqFJJTkWikQNQoTqp5pJKTZVJAzUPNQc8pJJGyyRDtCkkkp3DY//9k="></img>
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={
            profile.photos.large ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU'
          }
        ></img>
        <ProfileStatusHooks status={status} updateUserStatus={updateUserStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo
