import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from 'src/app/auth/store/selectors';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'mc-topbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store, private persistanceService: PersistanceService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))


    this.currentUser$.subscribe(res => console.log('currentUser', res))
this.isLoggedIn$.subscribe(res => console.log('isLoggedIn', res))
this.isAnonymous$.subscribe(res => console.log('isAnonymous', res))

const token = this.persistanceService.get('accessToken')
      console.log(token)
    
  }

}
