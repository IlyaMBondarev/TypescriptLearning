import { renderBlock } from './lib.js'
import * as dayjs from 'dayjs'

const oneDayValue = 1000 * 60 * 60 * 24

export function renderSearchFormBlock (
  enterDate:string = dayjs(Date.now() + oneDayValue).format('YYYY-MM-DD'),
  exitDate:string = dayjs(Date.now() + 3 * oneDayValue).format('YYYY-MM-DD')
) {
  const lastDateOfTheMonth:number = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
  const minDate:string = dayjs().format('YYYY-MM-DD')
  const maxDate:string = dayjs(new Date(new Date().getFullYear(), new Date().getMonth(), lastDateOfTheMonth)).format('YYYY-MM-DD')

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${enterDate}" min="${minDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${exitDate}" min="${minDate}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
