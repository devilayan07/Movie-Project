import React from 'react'
import Trending from "./assets/icons/trending.svg"
import NewRelease from "./assets/icons/newRelease.svg"
import ComingSoon from "./assets/icons/commingSoon.svg"
import Favourites from "./assets/icons/favourite.svg"
import WatchLater from "./assets/icons/watchLater.svg"
function SideBar() {
  return (
    <aside>
				<ul className="space-y-2">
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-[#00D991] text-black" href="#">
							<img src={Trending} width="24" height="24" alt="Trending" />
							<span>Trending</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={NewRelease} width="24" height="24" alt="NewRelease" />
							<span>New Releases</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={ComingSoon} width="24" height="24" alt="ComingSoon" />
							<span>Coming Soon</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={Favourites} width="24" height="24" alt="Favourites" />
							<span>Favourites</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={WatchLater} width="24" height="24" alt="WatchLater" />
							<span>Watch Later</span>
						</a>
					</li>
				</ul>
			</aside>
  )
}

export default SideBar
