import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiu-herby',
  standalone: true,
  imports: [],
  templateUrl: './tiu-herby.component.html',
  styleUrl: './tiu-herby.component.css'
})
export class TiuHerbyComponent implements OnInit{
  currentTime: any;
  dateInfo: any;
  nombre: string="";
  carrera: string="";
  facultad: string="";

  constructor(
    public router: Router
  ){}
  ngOnInit(): void {
    this.updateTime(); // Llamar a la función una vez para obtener la hora actual al inicio
    setInterval(() => {
      this.updateTime(); // Actualizar la hora cada segundo
    }, 1000);
    this.updateDateInfo();
  }
  returnHome(){
    this.router.navigate(['']);
  }
  updateTime(): void {
    const now = new Date();
    const hours = this.formatTimeUnit(now.getHours());
    const minutes = this.formatTimeUnit(now.getMinutes());
    const seconds = this.formatTimeUnit(now.getSeconds());
    this.currentTime = `${hours}:${minutes}:${seconds}`;
  }

  formatTimeUnit(unit: number): string {
    return unit < 10 ? `0${unit}` : unit.toString();
  }

  updateDateInfo(): void {
    const now = new Date();
    const monthNames = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const dayOfWeekNames = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

    const dayOfWeekNumeric = now.getDay(); // 0 (Dom) a 6 (Sáb)
    const dayOfWeek = dayOfWeekNames[dayOfWeekNumeric];

    const dayOfMonth = now.getDate();
    const monthAbbreviation = monthNames[now.getMonth()];
    const year = now.getFullYear();

    this.dateInfo = {
      dayNumeric: dayOfMonth,
      dayText: dayOfWeek,
      monthAbbreviation: monthAbbreviation,
      year: year
    };
  }
}
