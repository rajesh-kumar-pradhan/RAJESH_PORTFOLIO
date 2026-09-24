import {
  ArrowUpRight,
  ShoppingBag,
  Headphones,
  Watch,
  Backpack,
  Plus,
  ListTodo,
  LayoutDashboard,
  CircleCheck,
  Check,
  GraduationCap,
  Layers3,
} from "lucide-react";

export function ShopPreview() {
  return (
    <div className="shop-window" aria-hidden="true">
      <div className="window-chrome">
        <span />
        <span />
        <span />
        <div>shopnest / discover</div>
        <ArrowUpRight size={12} />
      </div>
      <div className="shop-nav">
        <b>shopnest</b>
        <div>
          Discover <span>Collections</span>
        </div>
        <ShoppingBag size={16} />
      </div>
      <div className="shop-head">
        <div>
          <span>LESS, BUT BETTER.</span>
          <h4>
            Find your
            <br />
            everyday essential.
          </h4>
        </div>
        <div className="shop-mark">
          s<span>n</span>
        </div>
      </div>
      <div className="shop-products">
        {[
          { Icon: Headphones, name: "Everyday audio", type: "SOUND" },
          { Icon: Watch, name: "On your time", type: "LIFESTYLE" },
          { Icon: Backpack, name: "Go anywhere", type: "ESSENTIALS" },
        ].map(({ Icon, name, type }) => (
          <div key={name}>
            <div className="product-icon">
              <Icon strokeWidth={1.2} />
              <span>
                <Plus size={12} />
              </span>
            </div>
            <small>{type}</small>
            <strong>{name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
export function TaskPreview() {
  return (
    <div className="task-window" aria-hidden="true">
      <div className="mini-sidebar">
        <div className="app-icon">
          <ListTodo size={19} />
        </div>
        <LayoutDashboard size={17} />
        <ListTodo size={17} />
        <CircleCheck size={17} />
        <div className="mini-avatar">R</div>
      </div>
      <div className="task-content">
        <div className="task-top">
          <span>PERSONAL WORKSPACE</span>
          <span>↗</span>
        </div>
        <h4>A little more focus.</h4>
        <p>Make room for what matters.</p>
        <div className="task-tabs">
          <span>
            My tasks <b>4</b>
          </span>
          <span>Completed</span>
          <Plus size={15} />
        </div>
        <div className="task-row">
          <span className="task-check checked">
            <Check size={12} />
          </span>
          <span className="complete">Connect MongoDB Atlas</span>
          <small>Backend</small>
        </div>
        <div className="task-row">
          <span className="task-check checked">
            <Check size={12} />
          </span>
          <span className="complete">Test the login API</span>
          <small>API</small>
        </div>
        <div className="task-row">
          <span className="task-check" />
          <span>Build something useful</span>
          <small>Today</small>
        </div>
        <div className="task-row">
          <span className="task-check" />
          <span>Keep learning. Keep shipping.</span>
          <small>Always</small>
        </div>
        <div className="task-progress">
          <span>Small steps. Real progress.</span>
          <div>
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}
export function SchoolPreview() {
  return (
    <div className="school-window" aria-hidden="true">
      <div className="school-top">
        <div>
          <GraduationCap size={22} />
          <b>School workspace</b>
        </div>
        <span>RP</span>
      </div>
      <div className="school-body">
        <div className="school-greeting">
          <span>YOUR SCHOOL, AT A GLANCE</span>
          <h4>Everything in its place.</h4>
        </div>
        <div className="school-tiles">
          <div>
            <span>Students</span>
            <b>Directory</b>
            <div className="avatar-stack">
              <i>A</i>
              <i>M</i>
              <i>R</i>
              <i>+</i>
            </div>
          </div>
          <div>
            <span>Academics</span>
            <b>Class overview</b>
            <div className="class-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <div className="school-list">
          <div>
            <span className="school-calendar">21</span>
            <span>
              <b>Class schedule</b>
              <small>Plan the day ahead</small>
            </span>
            <ArrowUpRight size={16} />
          </div>
          <div>
            <span className="school-calendar">
              <Layers3 size={17} />
            </span>
            <span>
              <b>One organized workspace</b>
              <small>Less searching. More clarity.</small>
            </span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
